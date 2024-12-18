import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ShowAlert } from "../utils/AlertUtils.js";

const ProtectedRoute = ({ children, alertMessage }) => {
  const { token, isLoading } = useAuth();
  const [hasAlerted, setHasAlerted] = useState(false);

  useEffect(() => {
    const handleAlert = async () => {
      if (!isLoading && !token && !hasAlerted && alertMessage) {
        await ShowAlert("info", "", alertMessage); // SweetAlert2 알림 표시
        setHasAlerted(true);
      }
    };
    handleAlert(); // 비동기 함수 호출
  }, [isLoading, token, hasAlerted, alertMessage]);

  // 로딩 중 상태 처리
  if (isLoading) {
    return null; // 로딩 상태일 때 아무 것도 렌더링하지 않음
  }

  // 인증이 되지 않았을 경우 경고 후 리디렉션
  if (!token && hasAlerted) {
    return <Navigate to="/login" replace />;
  }

  // 인증된 경우 자식 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
