import express from "express";
import fetch from "node-fetch";
import { DBsocialSignin, DBfindUser, getToken } from "../../db.js";

const router = express.Router();

//카카오
router.get("/", async (req, res) => {
  try {
    //로그인 링크
    const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_RESTAPI_KEY}&redirect_uri=http://${process.env.SERVER_URI}/auth/kakao/callback`;
    res.redirect(kakaoAuth);
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

//인가코드가 req로 넘어옴
router.get("/callback", async (req, res) => {
  //토큰 받기
  const baseUri = "https://kauth.kakao.com/oauth/token";
  const config = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.KAKAO_RESTAPI_KEY,
    redirect_uri: `http://${process.env.SERVER_URI}/auth/kakao/callback`,
    code: req.query.code,
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: config,
  };
  const response = await fetch(baseUri, requestOptions);
  const data = await response.json();

  const token = data.access_token;

  //받은 토큰으로 유저정보 받기
  const baseUri_ = "https://kapi.kakao.com/v2/user/me";
  const requestOptions_ = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response_ = await fetch(baseUri_, requestOptions_);
  const data_ = await response_.json();

  //return res.json(data_);

  const result = await DBfindUser(data_.id, "KAKAO");

  //res.json(result);

  let jwtToken;
  if (!result[0]) {
    try {
      const [results, fields] = await DBsocialSignin(
        data_.properties.nickname,
        data_.id,
        null,
        "KAKAO"
      );
      jwtToken = await getToken({
        id: data_.id,
        name: data_.properties.nickname,
        social: "KAKAO",
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        message: "회원 등록중에 오류가 발생했습니다.",
      });
    }
  } else {
    jwtToken = await getToken({
      id: result[0].id,
      name: result[0].name,
      social: "KAKAO",
    });
  }
  return res.status(200).json({
    status: "success",
    message: "로그인 성공.",
    data: { token: jwtToken },
  });
});

export { router };
