import express from "express";
const app = express();
const PORT = 3000;
import { db } from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import { router as authRouter } from "./routes/auth.js";
import { router as userRouter } from "./routes/user.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "https://eworld-illumination.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
dotenv.config();

app.get("/", (req, res) => {
  res.send("Node.js server is running!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send("");
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

// 소셜 로그인 인증
app.use("/auth", authRouter);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
