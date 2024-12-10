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
      <Header title="로그인" isBack="true" />
      <div className="mt-50 flex flex-col items-center">
        <div className="h-150 w-200 bg-[url('/logo.png')] bg-contain bg-no-repeat"></div>

        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className="input-base mb-28"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="input-base mb-15"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <p className="mb-36 flex w-300 items-center justify-end text-sm">
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
          </p>
          {isLoading ? (
            <div className="spinner mb-10">
              <MoonLoader size={15}></MoonLoader>
            </div>
          ) : (
            <button className="bg-white px-0 py-5" type="submit">
              <img src="/login/login.png" alt="로그인" width="300" />
            </button>
            // w-300 h-50 bg-eworldRed font-bold text-white
          )}
        </form>

        <div className="flex w-300 flex-col text-base">
          <button className="bg-white px-0 py-5">
            <img src="/login/login_kakao.png" alt="카카오 로그인" width="300" />
          </button>
          <button className="bg-white px-0 py-5">
            <img src="/login/login_naver.png" alt="네이버 로그인" width="300" />
          </button>
          <button className="bg-white px-0 py-5">
            <img src="/login/login_google.png" alt="구글 로그인" width="300" />
          </button>
          {/* mb-10 bg-kakao text-black 
          mb-10 bg-naver text-black
          mb-10 bg-google text-black*/}
        </div>

        <p className="pt-20 text-16 font-bold">
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
