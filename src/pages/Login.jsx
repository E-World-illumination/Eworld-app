import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { loginUrl } from "../api/apiClient";
import MenuBar from "../components/MenuBar";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("eworld");
  const { login, setIsLoading, isLoading } = useAuth();
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
      <Header title="로그인" isBack={true} />
      <div className="mt-30 flex flex-col items-center">
        <div className="h-150 w-200 bg-[url('/logo.png')] bg-contain bg-no-repeat"></div>

        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className="input-base mb-20"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="input-base mb-30"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {/* <p className="mb-36 flex w-300 items-center justify-end text-sm">
            <span>
              <a href="#" className="text-12 font-bold text-black">
                아이디 찾기
              </a>
            </span>
            <span className="px-5">|</span>
            <span>
              <a href="#" className="text-12 font-bold text-black">
                비밀번호 찾기
              </a>
            </span>
          </p> */}
          {isLoading ? (
            <div className="spinner mb-10">
              <MoonLoader size={15}></MoonLoader>
            </div>
          ) : (
            <button
              className="h-50 w-300 bg-eworldRed px-0 py-5 text-18 text-white"
              type="submit"
            >
              로그인
            </button>
          )}
        </form>

        <div className="mt-30 w-300 bg-white text-base">
          <div className="py-20">
            <img src="/login/social_title.png" alt="" />
          </div>
          <div className="text-center">
            <button
              className="bg-white py-5"
              onClick={() => {
                window.location.href = loginUrl.kakao;
              }}
            >
              <img
                src="/login/login_kakao.png"
                alt="카카오 로그인"
                width="46"
              />
            </button>
            <button
              className="bg-white py-5"
              onClick={() => {
                window.location.href = loginUrl.naver;
              }}
            >
              <img
                src="/login/login_naver.png"
                alt="네이버 로그인"
                width="46"
              />
            </button>
            <button
              className="bg-white py-5"
              onClick={() => {
                window.location.href = loginUrl.google;
              }}
            >
              <img src="/login/login_google.png" alt="구글 로그인" width="46" />
            </button>
          </div>
        </div>

        <p className="pt-40 text-14">
          아직 회원이 아니신가요?{" "}
          <a href="/signup" className="text-eworldRed">
            회원가입
          </a>
        </p>
      </div>
      {/* <MenuBar color="eworld" /> */}
    </>
  );
};

export default Login;
