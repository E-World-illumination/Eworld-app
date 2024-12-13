import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

import Info from "../components/Info";
import Coupon from "../components/Coupon";
import Apply from "../components/Apply";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../api/authApi";

const MyPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    profile_img: "",
    email: "",
    social: "",
  });
  const [couponData, setCouponData] = useState({
    content: "쿠폰",
    is_used: false,
  });
  // coupon data는 content, is_used 필요함.
  const [applyData, setApplyData] = useState(null); // api 연동후 coupon applyData 받아오기
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const getUserInfo = async (e) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        window.location.reload();
      }

      const response = await userInfo(token.token);
      setUserData(response.data);
    } catch (err) {
      setError(err.message || "회원 정보 요청 실패");
    }
  };

  useEffect(() => getUserInfo, []);

  return (
    <>
      <Header title="MY PAGE" isBack={false} />
      <div className="flex h-5/6 flex-col items-center border-t border-neutral-300 pt-50">
        {/* 아래 div 클릭시 회원정보 수정 페이지로 이동 */}
        <Info
          social={userData.social}
          name={userData.name}
          profile_img={userData.profile_img}
        />
        <Coupon data={couponData} />
        <Apply data={applyData} />
        {/* 로그아웃 버튼 div */}
        <div className="flex h-full items-end pb-50">
          <div
            className={`mt-50 w-330 rounded-[10px] border border-neutral-300 p-10 text-center text-home`}
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            로그아웃
          </div>
        </div>
      </div>
      <MenuBar color="home" menu="mypage" />
    </>
  );
};

export default MyPage;
