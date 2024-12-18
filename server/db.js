import mysql from "mysql2/promise";
import dotenv from "dotenv";
import JWT from "jsonwebtoken";
dotenv.config();

// DB연결
const db = mysql.createPool({
  host: process.env.DB_URI,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// 현재 일자 반환
const getDate = () => {
  const options = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const now = new Date();
  const koreanDate = now.toLocaleString("en-CA", options); // en-CA ensures the format is YYYY-MM-DD

  return koreanDate;
};

// DB에 회원 정보 넣기
const DBsocialSignin = async (name, id, email = null, photo, social) => {
  const [results, fields] = await db.execute(
    "INSERT INTO `user`(`name`, `id`, `email`, `profile_img`,`social`, `created_at`) VALUES (?,?,?,?,?,?)",
    [name, id, email, photo, social, getDate()]
  );
  return [results, fields];
};

const DBfindUser = async (id, social) => {
  const result = await db.execute(
    "SELECT * FROM user WHERE id = ? AND social = ?;",
    [id, social]
  );
  return result[0];
};

//DB API

const getToken = (data) => {
  //console.log("getToken");
  //console.log(data);
  const token = JWT.sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const verifyToken = (token) => {
  let decoded;
  try {
    decoded = JWT.verify(token.split(" ")[1], process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
    decoded = "error";
  }
  //console.log(decoded);
  return decoded;
};

export { db, getDate, DBsocialSignin, getToken, DBfindUser, verifyToken };
