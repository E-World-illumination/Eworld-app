import { createContext, useContext, useState, useEffect } from "react";

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

  const login = (tokenData) => {
    if (!tokenData || typeof tokenData !== "object" || !tokenData.token) {
      console.error("유효하지 않은 토큰 데이터:", tokenData);
      return;
    }

    const tokenValue = tokenData.token;

    setToken(tokenValue);

    try {
      localStorage.setItem("token", JSON.stringify({ token: tokenValue }));
    } catch (error) {
      console.error("로컬 스토리지 저장 중 오류 발생:", error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoading, isAuthenticated }}
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
