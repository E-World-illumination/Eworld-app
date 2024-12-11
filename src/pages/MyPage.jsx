import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

import Info from "../components/Info";
import Coupon from "../components/Coupon";
import Apply from "../components/Apply";
import { useAuth } from "../provider/AuthProvider";

const MyPage = () => {
  const [social, setSocial] = useState(null);
  const [couponData, setCouponData] = useState(null);
  const [applyData, setApplyData] = useState(null);

  const { logout } = useAuth();
  return (
    <>
      <Header title="MY PAGE" isBack="false" />
      <div className="mt-50 flex h-5/6 flex-col items-center">
        {/* 아래 div 클릭시 회원정보 수정 페이지로 이동 */}
        <Info social={social} />
        <Coupon data={couponData} />
        <Apply data={applyData} />
        {/* 로그아웃 버튼 div */}
        <div className="flex h-full items-end pb-50">
          <div
            className={`boldRedClass mt-50 w-330 rounded-[10px] border border-gray-300 p-10 text-center`}
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </div>
        </div>
      </div>
      <MenuBar color="eworld" />
    </>
  );
};

export default MyPage;
