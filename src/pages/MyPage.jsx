import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const titleClass =
    "border-gray-280 w-330 border-b p-10 text-20 font-bold text-black";
  const listGrayClass = "px-10 pt-10 text-16 text-gray-500";
  const listRedClass = "px-10 pt-10 text-16 text-eworldRed";
  const boldRedClass = "text-20 font-bold text-eworldRed";

  return (
    <>
      <Header title="MY PAGE" isBack="false" />
      <div className="mt-50 flex h-5/6 flex-col items-center">
        {/* 아래 div 클릭시 회원정보 수정 페이지로 이동 */}
        <a href="/modify">
          <div className="flex h-120 w-330 justify-between rounded-[10px] border border-gray-300 p-20">
            <div>
              <div className="pl-10 text-26 font-bold text-black">권혜진</div>
              <div className={`py-10 pl-15 ${boldRedClass}`}>zinee</div>
            </div>
            <div className="flex items-center text-black">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </a>

        <div className="mt-50">
          <div className={`${titleClass}`}>쿠폰 내역</div>
          <div className={`${listGrayClass}`}>ㆍ음료수 교환권</div>
        </div>
        <div className="mt-50">
          <div className={`${titleClass}`}>응모 내역</div>
          {/* 응모내역 없을경우 gray로 출력 */}
          <div className={`${listGrayClass}`}>ㆍ응모 내역이 없습니다.</div>
          {/* 응모내역 있을경우 eworldRed로 출력 */}
          <div className={`${listRedClass}`}>ㆍ이월드 자유이용권 응모 완료</div>
        </div>
        {/* 로그아웃 버튼 div */}
        <div className="flex h-full items-end pb-50">
          <div
            className={`mt-50 w-330 rounded-[10px] border border-gray-300 p-10 text-center ${boldRedClass}`}
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
