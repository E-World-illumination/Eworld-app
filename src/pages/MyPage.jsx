import React, { useState, useContext } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  return (
    <>
      <Header title="MY PAGE" />
      <div className="mt-50 flex flex-col items-center">
        <div className="flex h-120 w-330 justify-between rounded-[10px] border border-gray-300 p-20">
          <div>
            <div className="pl-10 text-26 font-bold text-black">권혜진</div>
            <div className="py-10 pl-15 text-20 font-bold text-eworldRed">
              zinee
            </div>
          </div>
          <div className="flex items-center text-black">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div></div>
      </div>
      <MenuBar color="eworld" />
    </>
  );
};

export default MyPage;
