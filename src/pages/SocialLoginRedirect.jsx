// SocialLoginRedirect.js
/*
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { get } from "../api/apiClient";

const SocialLoginRedirect = () => {
  const { socialLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSocialLogin = async () => {
      try {
        const currentPath = location.pathname; // 현재 경로
        let apiUrl;

        // 현재 경로에 따라 API URL 설정
        if (currentPath === "/auth/google/callback") {
          apiUrl = "/auth/google/callback";
        } else if (currentPath === "/auth/kakao/callback") {
          apiUrl = "/auth/kakao/callback";
        } else if (currentPath === "/auth/naver/callback") {
          apiUrl = "/auth/naver/callback";
        } else {
          throw new Error("잘못된 리다이렉트 경로");
        }

        const response = await get(apiUrl);

        if (response.status === "success") {
          socialLogin(response); // data 저장 , 처리는 socialLogin 함수에서 함
          navigate("/"); // 루트 페이지로 리다이렉트
        } else {
          console.error("소셜 로그인 실패:", response.message);
          navigate("/login"); // 로그인 페이지로 리다이렉트
        }
      } catch (error) {
        console.error("소셜 로그인 처리 중 오류:", error);
        navigate("/login");
      }
    };

    fetchSocialLogin();
  }, [socialLogin, navigate, location]);

  return <div>소셜 로그인 처리 중...</div>;
};

export default SocialLoginRedirect;
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const SocialLoginRedirect = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();

  useEffect(() => {
    // Get token from the URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    console.log(queryParams);
    console.log(token);

    if (token) {
      // Store the token in localStorage (or sessionStorage)
      const response = {
        status: "success",
        message: "로그인 성공.",
        data: { token: token },
      };
      login(response);

      // Optionally, redirect the user to the root ("/") or another page
      navigate("/"); // Redirect to the root page ("/")
    } else {
      // Handle the case when the token is missing
      console.error("JWT token is missing");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Processing Login...</h1>
      {/* You can show a loading indicator here if needed */}
    </div>
  );
};

export default SocialLoginRedirect;
