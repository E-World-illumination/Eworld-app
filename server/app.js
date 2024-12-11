import express from "express";
const app = express();
const PORT = 3000;
import { db } from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import { router as authRouter } from "./routes/auth.js";

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Node.js server is running!");
});

app.get("/query", (req, res) => {
  const query = "SELECT * FROM `user`";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error running query:", err);
      res.status(500).send("Error running query");
    } else {
      res.json(results);
    }
  });
});

//로그인, 소셜 로그인
app.post("/login", (req, res) => {
  const { id, password } = req.body;
  const query = "SELECT * FROM user WHERE id = ? AND password = ?";

  db.query(query, [id, password], (err, results) => {
    if (err) {
      console.error("Error running query:", err);
      res.status(500).send("Error running query");
    } else {
      res.json(results);
    }
  });
});

// 소셜 로그인 인증
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
