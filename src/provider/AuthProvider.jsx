import { createContext, useContext, useState, useEffect } from "react";
import { userInfo } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { ShowAlert } from "../utils/AlertUtils";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("token") || null;
    } catch (error) {
      console.error("로컬 스토리지 접근 실패:", error);
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false); // 초기 로딩 완료
  }, []);
  const [userData, setUserData] = useState({});

  const login = (userData) => {
    if (!userData.data.token) {
      console.error("유효하지 않은 토큰 데이터:", userData);
      return;
    }

    const tokenValue = userData.data.token;
    setToken(tokenValue);

    try {
      localStorage.setItem("token", tokenValue);
    } catch (error) {
      console.error("로컬 스토리지 저장 중 오류 발생:", error);
    }
  };

  const logout = () => {
    ShowAlert("info", "", "로그아웃 되었습니다", false); // Alert 먼저 실행
    localStorage.removeItem("token");
    setTimeout(() => {
      setToken(null); // Token 제거를 딜레이
      navigate("/", { replace: true });
    }, 100); // 약간의 지연 시간을 둠
  };

  const isAuthenticated = () => !!token;

  const fetchUserData = async () => {
    if (token) {
      try {
        const userResponse = await userInfo(token);
        setUserData(userResponse.data);
      } catch (error) {
        console.error("회원 정보 요청 실패:", error);
        setUserData(null);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isLoading,
        isAuthenticated,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
