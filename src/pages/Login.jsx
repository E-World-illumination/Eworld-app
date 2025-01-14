import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { loginUrl } from "../api/apiClient";
import { userLogin } from "../api/authApi";
import { ShowAlert } from "../utils/AlertUtils";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const context = useAuth();
  useEffect(() => {}, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    const response = await userLogin(userId, password);

    if (response.status === "success") {
      await ShowAlert("success", "", "로그인 성공");
      login(response);
      navigate("/");
    } else {
      const errorMessage = response.response.data.message;
      await ShowAlert("error", "", `${errorMessage}`);
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

          {isLoading ? (
            <div className="spinner mb-10">
              <MoonLoader size={15}></MoonLoader>
            </div>
          ) : (
            <button
              className="h-50 w-300 bg-home px-0 py-5 text-18 text-white"
              type="submit"
              disabled={isLoading} // 로딩 중 비활성화
            >
              {isLoading ? <MoonLoader size={15} /> : "로그인"}
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
                src="/login/login_KAKAO.png"
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
                src="/login/login_NAVER.png"
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
              <img src="/login/login_GOOGLE.png" alt="구글 로그인" width="46" />
            </button>
          </div>
        </div>

        <p className="pt-40 text-14">
          아직 회원이 아니신가요?{" "}
          <a href="/signup" className="text-bgRed">
            회원가입
          </a>
        </p>
      </div>
      {/* <MenuBar color="eworld" /> */}
    </>
  );
};

export default Login;
