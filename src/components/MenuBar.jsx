import React from "react";
import qrcode from "/QR.png"; // QR code in the center

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationDot,
  faStamp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = (props) => {
  const color = props.color;
  const menu = props.menu;

  const menuClass = "flex flex-col items-center";
  const iconClass = "h-24 w-24";
  const labelClass = "text-10 mt-4";

  return (
    <>
      <div
        className={`bg-${color} fixed bottom-0 z-50 flex h-71 w-full items-center justify-around`}
      >
        <a href="/">
          <div
            className={`${menu === "home" ? "text-white" : "text-[#8BA59E]"} ${menuClass}`}
          >
            <FontAwesomeIcon icon={faHome} className={iconClass} />
            <span className={labelClass}>HOME</span>
          </div>
        </a>
        <a href="/map">
          <div
            className={`${menu === "map" ? "text-white" : "text-[#8BA59E]"} ${menuClass}`}
          >
            <FontAwesomeIcon icon={faLocationDot} className={iconClass} />
            <span className={labelClass}>MAP</span>
          </div>
        </a>

        <a href="/qr">
          <div className="rounded-50% flex h-71 w-71 items-center justify-center first-letter:p-10">
            <img src={qrcode} alt="QR Code" className="h-71 w-71" />
          </div>
        </a>

        <a href="/stamp">
          <div
            className={`${menu === "stamp" ? "text-white" : "text-[#8BA59E]"} ${menuClass}`}
          >
            <FontAwesomeIcon icon={faStamp} className={iconClass} />
            <span className={labelClass}>STAMP</span>
          </div>
        </a>
        <a href="/mypage">
          <div
            className={`${menu === "mypage" ? "text-white" : "text-[#8BA59E]"} ${menuClass}`}
          >
            <FontAwesomeIcon icon={faUser} className={iconClass} />
            <span className={labelClass}>MY</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default MenuBar;
