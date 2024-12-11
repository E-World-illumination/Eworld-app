import React, { useState, useContext } from "react";
import MenuBar from "../components/MenuBar";

const Home = () => {
  return (
    <>
      <div className="m-auto flex flex-col items-center bg-[url('/home/main_bg.png')] bg-cover bg-center">
        <div className="pb-45 pt-70">
          <img src="/home/logo.png" alt="로고" className="w-205" />
        </div>
        <div>
          <img src="/home/tour_info.png" alt="스탬프투어 안내" width="95%" />
        </div>
        <div className="pb-40 pt-30 font-pretendard text-20 font-bold text-white">
          이월드에서 <span className="text-eworld">스탬프 존</span>을 찾아
          <br />
          스탬프를 모두 찍으면 끝!
        </div>
        <div className="py-40">
          <img src="/home/tour_gift.png" alt="스탬프투어 경품" width="95%" />
        </div>
        <div className="pb-80 pt-40">
          <img src="/home/tour_event.png" alt="스탬프투어 경품" width="95%" />
        </div>
      </div>
      <MenuBar color="home" />
    </>
  );
};

export default Home;
