import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

import Header from "../components/Header";
import { Map } from "react-kakao-maps-sdk";
import MenuBar from "../components/MenuBar";

const kakaoMap = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header title="Map" isBack="false"></Header>
      <div className="mt-30 flex h-[86%] flex-col items-center">
        <div className="h-3/6">
          {
            <Map
              center={{ lat: 35.85336, lng: 128.563916 }}
              style={{ width: "100%", flex: "1 0 auto" }}
              level={3}
            />
          }
        </div>
        <div className="flex h-3/6 items-end">
          <div
            className={`h-260 w-330 rounded-t-[10px] bg-white p-20 shadow-customShadow`}
          >
            <img
              src="/map/giant_toyfriends.png"
              alt="자이언트 토이프렌즈 광장"
              width="290"
              className="rounded-[10px]"
            />
            <div className="flex justify-between">
              <div className="px-10 pt-20 text-20 font-bold leading-5">
                자이언트 토이프렌즈 광장
                <br />
                <span className="text-14 font-medium text-neutral-500">
                  고스트하우스 앞 판타지 광장
                </span>
              </div>
              <div className="pr-5 pt-10">
                <img src="/stamp/stamp_off.png" alt="" width="55" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuBar color="eworld" menu="map" />
    </>
  );
};

export default kakaoMap;
