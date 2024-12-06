import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("eworld");
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
    <>
      <Header title="로그인" />
      <div className="mt-70 flex flex-col items-center">
        <div className="h-150 w-200 bg-[url('/logo.png')] bg-contain bg-no-repeat"></div>

        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className="input-base"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="input-base"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <p className="mb-36 flex w-300 items-center justify-end text-sm">
            <span>
              <a href="#" className="font-bold text-black">
                아이디 찾기
              </a>
            </span>
            <span className="px-5">|</span>
            <span>
              <a href="#" className="font-bold text-black">
                비밀번호 찾기
              </a>
            </span>
          </p>
          {isLoading ? (
            <div className="spinner">
              <MoonLoader size={15}></MoonLoader>
            </div>
          ) : (
            <button className="bg-eworldRed w-300 text-white" type="submit">
              로그인
            </button>
          )}
        </form>

        <div className="mt-10 flex w-300 flex-col text-base">
          <button className="mb-10 bg-kakao text-black">카카오 로그인</button>
          <button className="mb-10 bg-naver text-black">네이버 로그인</button>
          <button className="mb-10 bg-google text-black">구글 로그인</button>
        </div>

        <p>
          계정이 없으신가요?{" "}
          <a href="/signup" className="text-eworld">
            회원가입
          </a>
        </p>
      </div>
      <MenuBar color="eworld" />
    </>
  );
};

export default Login;
