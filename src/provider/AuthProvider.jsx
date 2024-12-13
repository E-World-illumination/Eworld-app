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

  const login = (userData) => {
    if (!userData.data.token) {
      console.error("유효하지 않은 토큰 데이터:", userData);
      return;
    }

    const tokenValue = userData.data.token;

    setToken(tokenValue);

    try {
      localStorage.setItem(
        "token",
        JSON.stringify({ token: tokenValue, social: false }),
      );
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

export function socialLogin({ socialUserData }) {
  if (!socialUserData.data.token) {
    console.error("소셜 로그인에서 유효하지 않은 토큰 데이터:", socialUserData);
    return;
  }

  const tokenValue = socialUserData.data.token;

  // 상태 업데이트
  setToken(tokenValue);

  try {
    // 로컬 스토리지에 저장
    localStorage.setItem(
      "token",
      JSON.stringify({ token: tokenValue, social: true }),
    );
  } catch (error) {
    console.error("로컬 스토리지 저장 중 오류 발생:", error);
  }
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
