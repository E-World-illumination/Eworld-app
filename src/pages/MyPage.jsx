import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

import Info from "../components/Info";
import Coupon from "../components/Coupon";
import Apply from "../components/Apply";
import { useAuth } from "../provider/AuthProvider";

const MyPage = () => {
  const [social, setSocial] = useState(null); // api 연동 후 social 받아오기
  const [couponData, setCouponData] = useState({
    content: "쿠폰",
    is_used: false,
  }); // coupon data는 content, is_used 필요함.
  const [applyData, setApplyData] = useState(null); // api 연동후 coupon applyData 받아오기
  const [userName, setUserName] = useState("손근영"); // api 연동후 username 받아오기
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const getUserInfo = async (e) => {
    setError("");
    try {
      const response = await userLogin(userId, password);
      login(response);
      navigate("/");
    } catch (err) {
      setError(err.message || "로그인 실패");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header title="MY PAGE" isBack={false} />
      <div className="mt-50 flex h-5/6 flex-col items-center">
        {/* 아래 div 클릭시 회원정보 수정 페이지로 이동 */}
        <Info social={social} name={userName} />
        <Coupon data={couponData} />
        <Apply data={applyData} />
        {/* 로그아웃 버튼 div */}
        <div className="flex h-full items-end pb-50">
          <div
            className={`mt-50 w-330 rounded-[10px] border border-neutral-300 p-10 text-center text-eworldRed`}
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </div>
        </div>
      </div>
      <MenuBar color="eworld" menu="mypage" />
    </>
  );
};

export default MyPage;
