import express from "express";
import { google } from "googleapis";
import fetch from "node-fetch";
import { DBsocialSignin, DBfindUser, getToken } from "../../db.js";

const router = express.Router();

// 구글 인증
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `http://${process.env.SERVER_URI}/auth/google/callback`,
);

// 구글 로그인 시작. 구글의 2.0 authorization으로 리다이렉트
router.get("/", (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });
  res.redirect(authUrl);
});

// 구글의 응답을 처리
router.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    // 인증 코드를 액세스 토큰으로 변환
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // 액세스 토큰으로 유저 프로필을 fetch
    const oauth2 = google.oauth2("v2");
    oauth2.userinfo.v2.me.get(
      {
        auth: oauth2Client,
      },
      async (err, response) => {
        if (err) {
          console.error("Error fetching user info: ", err);
          return res.status(500).send("Internal Server Error");
        }
        // 유저 정보 획득 완료
        /*return res.json({
          user: response.data,
          tokens,
        });*/
        const result = await DBfindUser(response.data.id, "GOOGLE");

        let jwtToken;
        if (!result[0]) {
          try {
            const [results, fields] = await DBsocialSignin(
              response.data.name,
              response.data.id,
              response.data.email,
              response.data.picture,
              "GOOGLE",
            );

            /*return res.json({
              results: results,
              fields: fields,
            });*/

            jwtToken = await getToken({
              key: results.insertId,
              id: response.data.id,
              name: response.data.name,
              social: "GOOGLE",
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
            key: result[0].key,
            id: result[0].id,
            name: result[0].name,
            social: "GOOGLE",
          });
        }
        /*res.status(200).json({
          status: "success",
          message: "로그인 성공.",
          data: { token: jwtToken },
        });*/

        return res.redirect(
          `http://eworld-illumination.netlify.app/SocialLoginRedirect?token=${jwtToken}`,
        );
      },
    );
  } catch (error) {
    console.error("Error during OAuth process: ", error);
    res.status(500).send("Error during authentication");
  }
});

export { router };
