import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

const Stamp = () => {
  const textClass = "w-280 text-16 font-bold text-neutral-500";
  return (
    <>
      <Header title="STAMP" isBack="false" />
      <div className="mt-30 flex flex-col items-center border-t border-gray-300">
        <div className="mt-40 grid w-280 grid-cols-2 gap-x-40 gap-y-30">
          <div>
            <img src="/stamp/stamp_on.png" alt="스탬프on" width="120" />
          </div>
          <div>
            <img src="/stamp/stamp_on.png" alt="스탬프on" width="120" />
          </div>
          <div>
            <img src="/stamp/stamp_on.png" alt="스탬프on" width="120" />
          </div>
          <div>
            <img src="/stamp/stamp_off.png" alt="스탬프off" width="120" />
          </div>
          <div>
            <img src="/stamp/stamp_off.png" alt="스탬프off" width="120" />
          </div>
          <div>
            <img src="/stamp/stamp_off.png" alt="스탬프off" width="120" />
          </div>
        </div>
        <div className={`mt-30 ${textClass} opacity-50`}>
          <span className="text-eworldRed">STAMP 3개</span> - 음료수 교환권
        </div>
        <div className={`mt-5 ${textClass} opacity-50`}>
          <span className="text-eworldRed">STAMP 6개</span> - 이월드 자유이용권
          응모 가능
        </div>
      </div>
      <MenuBar color="eworld" menu="stamp" />
    </>
  );
};

export default Stamp;
