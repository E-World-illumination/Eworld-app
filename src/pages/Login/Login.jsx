import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { MoonLoader } from "react-spinners";
import styles from "./styles.module.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, setIsLoading, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Example API call to validate user
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data); // Update context with user data
        navigate("/"); // Navigate to map page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "로그인 실패");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.logo}></div>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디를 입력해주세요"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className={styles.find}>
          <span>
            <a href="#">아이디 찾기</a>
          </span>
          <span>|</span>
          <span>
            <a href="#">비밀번호 찾기</a>
          </span>
        </p>
        {isLoading ? (
          <div className="spinner">
            <MoonLoader size={15}></MoonLoader>
          </div>
        ) : (
          <button className={styles.loginButton} type="submit">
            로그인
          </button>
        )}
      </form>

      <div className={styles.socialLogin}>
        <button className={styles.kakao}>카카오 로그인</button>
        <button className={styles.naver}>네이버 로그인</button>
        <button className={styles.google}>구글 로그인</button>
      </div>

      <p>
        계정이 없으신가요? <a href="/signup">회원가입</a>
      </p>
    </div>
  );
};

export default Login;
