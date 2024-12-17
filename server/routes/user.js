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
      "SELECT `latitude`, `longitude`, `name`, `name_kr`, `description`, `qr` FROM `stamp_place`;"
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

export { router };
