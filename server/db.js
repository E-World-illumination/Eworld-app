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
const DBsocialSignin = async (name, id, email = null, social) => {
  const [results, fields] = await db.execute(
    "INSERT INTO `user`(`name`, `id`, `email`, `social`, `created_at`) VALUES (?,?,?,?,?)",
    [name, id, email, social, getDate()]
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
/*
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});
*/

const getToken = (data) => {
  const token = JWT.sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export { db, DBsocialSignin, getToken, DBfindUser };
