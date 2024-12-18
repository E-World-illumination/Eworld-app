import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ShowAlert } from "../utils/AlertUtils.js";

const ProtectedRoute = ({ children, alertMessage }) => {
  const { token, isLoading } = useAuth();
  const [hasAlerted, setHasAlerted] = useState(false);

  useEffect(async () => {
    if (!isLoading && !token && !hasAlerted && alertMessage) {
      await ShowAlert("info", "", alertMessage);
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
