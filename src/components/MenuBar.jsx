import React from "react";
import qrcode from "/QR.png"; // QR code in the center

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationDot,
  faStamp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = ({ color }) => {
  const menuClass = "flex flex-col items-center text-white";
  const iconClass = "h-24 w-24";
  const labelClass = "text-10 mt-4";

  return (
    <>
      <div
        className={`bg-${color} fixed bottom-0 flex h-70 w-full items-center justify-around p-10`}
      >
        <div className={menuClass}>
          <FontAwesomeIcon icon={faHome} className={iconClass} />
          <span className={labelClass}>HOME</span>
        </div>
        <div className={menuClass}>
          <FontAwesomeIcon icon={faLocationDot} className={iconClass} />
          <span className={labelClass}>MAP</span>
        </div>

        <div className="bg-#fff rounded-50% -mt-20 flex h-70 w-70 items-center justify-center first-letter:p-10">
          <img src={qrcode} alt="QR Code" className="h-60 w-60" />
        </div>

        <div className={menuClass}>
          <FontAwesomeIcon icon={faStamp} className={iconClass} />
          <span className={labelClass}>STAMP</span>
        </div>
        <div className={menuClass}>
          <FontAwesomeIcon icon={faUser} className={iconClass} />
          <span className={labelClass}>MY</span>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
