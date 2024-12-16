import { createContext, useContext, useState, useEffect } from "react";
import { userInfo } from "../api/userApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setToken(null);
    localStorage.removeItem("token");
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
