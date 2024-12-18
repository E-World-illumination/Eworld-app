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
