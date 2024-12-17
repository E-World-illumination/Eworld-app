import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const ProtectedRoute = ({ children, alertMessage }) => {
  const { token, isLoading } = useAuth();
  const [hasAlerted, setHasAlerted] = useState(false);

  useEffect(() => {
    if (!isLoading && !token && !hasAlerted && alertMessage) {
      alert(alertMessage);
      setHasAlerted(true);
    }
  }, [isLoading, hasAlerted, alertMessage]);

  if (isLoading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
