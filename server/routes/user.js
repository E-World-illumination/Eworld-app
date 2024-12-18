import express from "express";
import { db, verifyToken } from "../db.js";
import JWT from "jsonwebtoken";

const router = express.Router();

function sendError(status, res, message) {
  return res.status(status).json({
    status: "error",
    message: message,
  });
}

router.get("/stamp", async (req, res) => {
  const token = req.get("Authorization");

  const userData = await verifyToken(token);

  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  const result = await db.execute(
    "SELECT stamp FROM user_stamp WHERE user = ?;",
    [userData.key]
  );
  return res.status(200).json({
    status: "success",
    message: "데이터 전송 완료.",
    data: result[0],
  });
});

router.post("/modify", async (req, res) => {
  const token = req.get("Authorization");
  const { phone, email, currentPassword, changePassword } = req.body;

  const userData = await verifyToken(token);

  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  let query = "UPDATE `user` SET ";
  const arr = [];

  if (phone != null) {
    query += "`phone` = ?";
    arr.push(phone);
  }

  if (email != null) {
    if (arr.length > 0) {
      query += ",";
    }
    query += "`email` = ?";
    arr.push(email);
  }

  //비밀번호 변경 로직
  if (currentPassword) {
    if (!changePassword) {
      return sendError(400, res, "변경할 비밀번호를 작성해 주세요.");
    }

    const result = await db.execute(
      "SELECT `password` FROM `user` WHERE `key` = ?;",
      [userData.key]
    );

    if (result[0][0].password != currentPassword) {
      return sendError(400, res, "잘못된 기존 비밀번호를 입력하셨습니다.");
    } else {
      if (arr.length > 0) {
        query += ",";
      }
      query += "`password` = ?";
      arr.push(changePassword);
    }
  }

  query += " WHERE `key` = ?;";
  arr.push(userData.key);

  //console.log(query);
  //console.log(arr);

  try {
    const result = await db.execute(query, arr);
    return res
      .status(200)
      .json({ status: "success", message: "변경에 성공하였습니다" });
  } catch (e) {
    console.log(e);
    return sendError(500, res, "처리중 에러가 발생하였습니다.");
  }
});

// 회원정보
router.get("/data", async (req, res) => {
  console.log("dataRequested");
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  try {
    const result = await db.execute(
      "SELECT `name`, `profile_img`, `phone`, `email`, `social`, `id` FROM `user` WHERE `key` = ?;",
      [userData.key]
    );

    return res.status(200).json({
      status: "success",
      message: "고객 정보를 불러오는데 성공했습니다.",
      data: result[0][0],
    });
  } catch (e) {
    console.log(e);
    console.log(userData);
    return sendError(500, res, "오류가 발생하였습니다.");
  }
});

// 쿠폰 리스트
router.get("/coupon", async (req, res) => {
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  try {
    const result = await db.execute(
      "SELECT `name`, `content`, `created_at`, `expired_at`, `is_used` FROM `user_coupon` WHERE `user` = ?;",
      [userData.key]
    );

    return res.status(200).json({
      status: "success",
      message: "쿠폰 정보를 불러오는데 성공했습니다.",
      data: result[0],
    });
  } catch (e) {
    console.log(e);
    return sendError(500, res, "오류가 발생하였습니다.");
  }
});

router.get("/stamp_course", async (req, res) => {
  try {
    const result = await db.execute(
      "SELECT `key`, `latitude`, `longitude`, `name`, `name_kr`, `description`, `qr` FROM `stamp_place`;"
    );

    return res.status(200).json({
      status: "success",
      message: "장소 정보를 불러오는데 성공했습니다.",
      data: result[0],
    });
  } catch (e) {
    console.log(e);
    return sendError(500, res, "오류가 발생하였습니다.");
  }
});

router.get("/add_stamp", async (req, res) => {
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  let stamp;
  try {
    const queryParams = req.query;
    // 스탬프 이름
    stamp = queryParams.stamp;
  } catch (e) {
    console.log(e);
    console.log("쿼리 추출 오류");
  }
  console.log(stamp);

  let result;
  try {
    result = await db.execute(
      "SELECT `key` FROM `stamp_place` WHERE `name` = ?;",
      [stamp]
    );
    //console.log(result[0][0]);
  } catch (e) {
    console.log(e);
    console.log("add_stamp 쿼리 에러 1");
  }

  if (result === undefined) {
    return sendError(400, res, "올바른 QR이 아닙니다.");
  }

  try {
    const check = await db.execute(
      "SELECT 1 FROM `user_stamp` WHERE `user` = ? AND `stamp` = ? LIMIT 1;",
      [userData.key, result[0][0].key]
    );
    if (check[0][0] != undefined) {
      return sendError(400, res, "이미 등록된 QR입니다.");
    }

    console.log(result);

    result = await db.execute(
      "INSERT INTO `user_stamp`(`user`, `stamp`) VALUES (?,?)",
      [userData.key, result[0][0].key]
    );
  } catch (e) {
    console.log(e);
    console.log("add_stamp 쿼리 에러 2");
  }

  return res.status(200).json({
    status: "success",
    message: "등록 완료.",
  });
});

router.get("/delete", async (req, res) => {
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  try {
    const check = await db.execute("DELETE FROM `user` WHERE `key` = ?;", [
      userData.key,
    ]);
  } catch (error) {
    return sendError(500, res, "삭제중 에러 발생.");
  }
  return res.status(200).json({
    status: "success",
    message: "삭제 완료.",
  });
});

router.get("/event_entry", async (req, res) => {
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  let result;
  try {
    result = await db.execute(
      "SELECT `stamp` FROM `user_stamp` WHERE `user` = ?;",
      [userData.key]
    );
  } catch (e) {
    console.log(e);
    console.log("add_stamp 쿼리 에러 1");
  }

  try {
    if (result[0].length === 6) {
      const result = await db.execute(
        "INSERT INTO `event_entry`(`user`, `content`) VALUES (?,?);",
        [userData.key, "자유이용권"]
      );
      return res.status(200).json({
        status: "success",
        message: "응모 완료",
      });
    } else {
      return sendError(400, res, "스탬프를 다 모으지 못했습니다.");
    }
  } catch (e) {
    return sendError(500, res, "서버 처리중 오류 발생");
  }
});

router.get("/event_entry_check", async (req, res) => {
  const token = req.get("Authorization");
  const userData = await verifyToken(token);
  if (userData === "error") {
    return sendError(400, res, "잘못된 토큰입니다");
  }

  try {
    const result = await db.execute(
      "SELECT 1 FROM `event_entry` WHERE `user` = ? LIMIT 1;",
      [userData.key]
    );

    let data = null;
    if (result[0][0] !== undefined) {
      data = true;
    } else {
      data = false;
    }
    return res.status(200).send({
      status: "success",
      message: "확인 완료",
      data: true,
    });
  } catch (e) {
    console.log(e);
    return sendError(500, res, "서버 처리중 오류 발생");
  }
});

// QR등록에서 스탬프 추가하고, 갯수가 3/6개면 각각 음료수 쿠폰, 자유이용권 응모가 되도록 코드 수정

router.get("/insert_coupon", async (req, res) => {});

export { router };
