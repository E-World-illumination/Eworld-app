import express, { Router } from "express";
import { db, getToken, getDate } from "../db.js";
import dotenv from "dotenv";

import { router as googleHandler } from "./auth/googleHandler.js";
import { router as kakaoHandler } from "./auth/kakaoHandler.js";
import { router as naverHandler } from "./auth/naverHandler.js";

const router = express.Router();

// 일반 회원가입
router.post("/signup", async (req, res) => {
  let { id, password, name, email, phone } = req.body;

  if (!id || !password || !name) {
    return res
      .status(400)
      .json({ status: "error", message: "채워지지 않은 항목이 있습니다." });
  }
  if (!email || email.trim() === "") {
    email = null;
  }

  // 중복확인
  const duplication = await db.execute("SELECT * FROM user WHERE phone = ?;", [
    phone,
  ]);

  if (duplication[0].length > 0) {
    let text = "";
    console.log(duplication[0][0].social);
    console.log(duplication[0][0].social === null);
    if (duplication[0][0].social != null) {
      text = `${duplication[0].social}을 통해 로그인하여 주시길 바랍니다.`;
    }
    return res
      .status(400)
      .json({ status: "error", message: `이미 등록된 회원입니다. ${text}` });
  }

  // 회원가입 처리
  // Malformed communication packet. error 1835 이슈 있어서 하드코딩함
  try {
    const [results, fields] = await db.execute(
      /*"INSERT INTO `user`(`name`, `password`, `id`, `email`, `created_at`) VALUES (?,?,?,?,?)",
      [name, password, id, email, phone, getDate()]*/
      `INSERT INTO user (name, id, password, phone, email, profile_img, social, created_at) VALUES ('${name}', '${id}', '${password}', '${phone}', '${email}', NULL, NULL, '${getDate()}')`,
    );
    const jwtToken = getToken({ id: id, name: name, social: null });
    res.status(200).json({
      status: "success",
      message: "회원가입 성공.",
      data: { token: jwtToken },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "fail",
      message: "회원가입 실패",
      data: {},
    });
  }
});

// 아이디 중복 확인
router.post("/duplicate", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ status: "error", message: "아이디를 입력해주세요." });
  }
  const duplication = await db.execute(
    "SELECT * FROM user WHERE id = ? AND social IS NULL;",
    [id],
  );
  if (duplication[0][0] === undefined) {
    res.status(200).json({
      status: "success",
      message: "중복되는 아이디 없음.",
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "아이디 중복",
    });
  }
});

router.post("/login", async (req, res) => {
  console.log("login");
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({
      status: "error",
      message: "아이디 혹은 패스워드를 입력하지 않았습니다.",
    });
  }
  const result = await db.execute(
    "SELECT * FROM user WHERE id = ? AND password = ?;",
    [id, password],
  );
  console.log(result[0]);
  console.log(!result[0][0]);

  if (!result[0][0]) {
    return res.status(400).json({
      status: "error",
      message: "회원 정보가 존재하지 않습니다.",
    });
  }

  const jwtToken = getToken({
    key: result[0][0].key,
    id: result[0][0].id,
    name: result[0][0].name,
    social: null,
  });
  res.status(200).json({
    status: "success",
    message: "로그인 성공.",
    data: { token: jwtToken },
  });
});

router.use("/google", googleHandler);
router.use("/kakao", kakaoHandler);
router.use("/naver", naverHandler);

export { router };
