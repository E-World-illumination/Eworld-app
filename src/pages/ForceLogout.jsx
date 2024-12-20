import { useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";

const ForceLogout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return null; // 화면에 아무것도 렌더링하지 않음
};

export default ForceLogout;
