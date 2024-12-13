import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

import Info from "../components/Info";
import Coupon from "../components/Coupon";
import Apply from "../components/Apply";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { userCoupon } from "../api/userApi";

const MyPage = () => {
  const navigate = useNavigate();
  const [couponData, setCouponData] = useState({
    content: "",
    created_at: "",
    expired_at: "",
    is_used: 0,
    name: "",
  });
  // coupon data는 content, is_used 필요함.
  const [applyData, setApplyData] = useState(null); // api 연동후 coupon applyData 받아오기
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { logout, token, userData } = useAuth();
  const { name, profile_img, social } = userData;

  const getUserCoupon = async () => {
    try {
      const couponResponse = await userCoupon(token);
      setCouponData(couponResponse.data[0]);
    } catch (err) {
      setError(err.message || "쿠폰 요청 실패");
    }
  };

  useEffect(() => {
    if (token) {
      getUserCoupon();
    }
  }, [token]);

  return (
    <>
      <Header title="MY PAGE" isBack={false} />
      <div className="flex h-5/6 flex-col items-center border-t border-neutral-300 pt-50">
        {/* 아래 div 클릭시 회원정보 수정 페이지로 이동 */}
        <Info social={social} name={name} profile_img={profile_img} />
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
