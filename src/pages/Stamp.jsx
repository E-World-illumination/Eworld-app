import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import StampList from "../components/StampList";

const Stamp = () => {
  const [stampCount, setStampCount] = useState(5); // api 연동후 stampCount 받아오기

  const textClass = "w-280 text-16 font-bold text-neutral-500";

  return (
    <>
      <Header title="STAMP" isBack={false} />
      <div className="mt-30 flex flex-col items-center border-t border-neutral-300">
        <StampList stampCount={stampCount} />
        <div
          className={`${stampCount > 2 ? "opacity-100" : "opacity-50"} ${textClass} mt-30`}
        >
          <span className="text-eworldRed">STAMP 3개</span> - 음료수 교환권
        </div>
        <div
          className={`${stampCount > 5 ? "opacity-100" : "opacity-50"} mt-5 ${textClass}`}
        >
          <span className="text-eworldRed">STAMP 6개</span> - 이월드 자유이용권
          응모 가능
        </div>
      </div>
      <MenuBar color="eworld" menu="stamp" />
    </>
  );
};

export default Stamp;
