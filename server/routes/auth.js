import express from "express";
import { db, getToken } from "../db.js";
import dotenv from "dotenv";

import { router as googleHandler } from "./handler/googleHandler.js";
import { router as kakaoHandler } from "./handler/kakaoHandler.js";
import { router as naverHandler } from "./handler/naverHandler.js";

const router = express.Router();

// 일반 회원가입
router.post("/signin", async (req, res) => {
  const { id, password, name, email, phone } = req.body;

  if (!id || !password || !name) {
    return res
      .status(400)
      .json({ status: "error", message: "채워지지 않은 항목이 있습니다." });
  }
  if (!email) {
    email = null;
  }

  // 중복확인
  const duplication = await db.execute("SELECT * FROM user WHERE phone = ?;", [
    phone,
  ]);

  if (duplication[0]) {
    let text = "";
    if (duplication[0].social != null) {
      text = `${duplication[0].social}을 통해 로그인하여 주시길 바랍니다.`;
    }
    return res
      .status(400)
      .json({ status: "error", message: `이미 등록된 회원입니다. ${text}` });
  }

  // 회원가입 처리
  try {
    const [results, fields] = await db.execute(
      "INSERT INTO `user`(`name`, `password`, `id`, `email`, `created_at`) VALUES (?,?,?,?,?)",
      [name, password, id, email, phone, getDate()]
    );
    const jwtToken = getToken({ id: id, name: name, social: null });
    res.status(200).json({
      status: "success",
      message: "회원가입 성공.",
      data: { token: jwtToken },
    });
  } catch (e) {
    res.status(500).json({
      status: "fail",
      message: "회원가입 실패",
      data: {},
    });
  }
});

router.post("/login", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({
      status: "error",
      message: "아이디 혹은 패스워드를 입력하지 않았습니다.",
    });
  }
  const result = await db.execute(
    "SELECT * FROM user WHERE id = ? AND password = ?;",
    [id, password]
  );

  if (!result[0]) {
    return res.status(400).json({
      status: "error",
      message: "회원 정보가 존재하지 않습니다.",
    });
  }

  const jwtToken = getToken({
    id: result[0].id,
    name: result[0].name,
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
