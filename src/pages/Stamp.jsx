import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import StampList from "../components/StampList";
import { fetchStampCount } from "../api/stampApi";
import { useAuth } from "../provider/AuthProvider";

const Stamp = () => {
  const [stampCount, setStampCount] = useState(0); // api 연동후 stampCount 받아오기
  const { token } = useAuth();
  console.log(token);
  const textClass = "w-280 text-16 font-bold text-neutral-500";

  useEffect(() => {
    if (token) {
      const fetchCount = async () => {
        const stampData = await fetchStampCount(token);
        console.log(stampData);
        setStampCount(stampData);
      };
      fetchCount();
    }
  }, [token]);

  return (
    <>
      <Header title="STAMP" isBack={false} />
      <div className="flex flex-col items-center">
        {console.log(stampCount)}
        <StampList stampCount={stampCount} />
        <div
          className={`${stampCount > 2 ? "opacity-100" : "opacity-50"} ${textClass} mt-30`}
        >
          <span className="text-bgRed">STAMP 3개</span> - 음료수 쿠폰
        </div>
        <div
          className={`${stampCount > 5 ? "opacity-100" : "opacity-50"} mt-5 ${textClass}`}
        >
          <span className="text-bgRed">STAMP 6개</span> - 이월드 자유이용권 응모
          가능
        </div>
      </div>
      <MenuBar color="home" menu="stamp" />
    </>
  );
};

export default Stamp;
