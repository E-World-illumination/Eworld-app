import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api/apiClient";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await get("/auth/google/callback");

        if (response.status === "success" && response.data.token) {
          // 토큰을 localStorage에 저장
          localStorage.setItem("token", response.data.token);
          console.log("토큰 저장 성공:", response.data.token);

          // 성공 후 메인 페이지로 이동
          navigate("/");
        } else {
          console.error("로그인 실패:", response.message);
          navigate("/login");
        }
      } catch (error) {
        console.error("소셜 로그인 처리 중 오류:", error);
        navigate("/login");
      }
    };

    fetchToken();
  }, [navigate]);

  return null; // UI 없음
};

export default RedirectHandler;
