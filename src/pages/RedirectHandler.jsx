import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { get } from "../api/apiClient";

const RedirectHandler = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // AuthProvider의 login 함수

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await get("/auth/google");
        const result = await response.data;

        if (result.status === "success" && result.token) {
          // AuthProvider의 login 함수 호출
          login(result);
          navigate("/"); // 성공 시 메인 페이지로 이동
        } else {
          throw new Error(result.message || "로그인 실패");
        }
      } catch (error) {
        console.error("소셜 로그인 처리 중 오류:", error);
        navigate("/login"); // 실패 시 로그인 페이지로 이동
      }
    };

    fetchToken();
  }, [login, navigate]);

  return null; // UI 없이 동작만 수행
};

export default RedirectHandler;
