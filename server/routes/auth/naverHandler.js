import express from "express";
import fetch from "node-fetch";
import { DBsocialSignin, DBfindUser, getToken } from "../../db.js";

const router = express.Router();

//네이버
router.get("/", async (req, res) => {
  try {
    //로그인 링크
    const naverAuth = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&redirect_uri=http://${process.env.SERVER_URI}/auth/naver/callback&state=${process.env.NAVER_STATE}`;
    res.redirect(naverAuth);
  } catch (e) {
    res.json(e);
  }
});

//인가코드가 req로 넘어옴. 카카오는 POST OR GET요청, 네이버는 GET요청.
router.get("/callback", async (req, res) => {
  //토큰받기
  const baseUri = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&redirect_uri=http://${process.env.SERVER_URI}/auth/naver/callback&code=${req.query.code}&state=${process.env.NAVER_STATE}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
    },
  };

  const response = await fetch(baseUri, requestOptions);
  const data = await response.json();

  const token = data.access_token;

  /*return res.json({
    uri: baseUri,
    result: response,
    token: data.access_token,
  });*/

  //받은 토큰으로 유저정보 받기
  const baseUri_ = "https://openapi.naver.com/v1/nid/me";
  const requestOptions_ = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response_ = await fetch(baseUri_, requestOptions_);
  const data_ = await response_.json();

  const result = await DBfindUser(data_.response.id, "NAVER");

  let jwtToken;
  if (!result[0]) {
    try {
      const [results, fields] = await DBsocialSignin(
        data_.response.name,
        data_.response.id,
        data_.response.email,
        data_.response.profile_image,
        "NAVER",
      );
      jwtToken = await getToken({
        key: results.insertId,
        id: data_.response.id,
        name: data_.response.name,
        social: "NAVER",
      });
    } catch (e) {
      return res.status(500).json({
        status: "error",
        message: "회원 등록중에 오류가 발생했습니다.",
      });
    }
  } else {
    jwtToken = await getToken({
      key: result[0].key,
      id: result[0].id,
      name: result[0].name,
      social: "NAVER",
    });
  }
  /*
  return res.status(200).json({
    status: "success",
    message: "로그인 성공.",
    data: { token: jwtToken },
  });
  */
  return res.redirect(
    `http://eworld-illumination.netlify.app/SocialLoginRedirect?token=${jwtToken}`,
  );
});

export { router };
