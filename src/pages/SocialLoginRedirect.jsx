import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const SocialLoginRedirect = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      const response = {
        status: "success",
        message: "로그인 성공.",
        data: { token: token },
      };
      login(response);

      navigate("/");
    } else {
      console.error("JWT token is missing");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Processing Login...</h1>
    </div>
  );
};

export default SocialLoginRedirect;
