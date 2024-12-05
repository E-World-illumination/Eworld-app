import React from "react";
import asset1 from "/asset1.png"; // Replace with actual path
import asset2 from "/asset2.png";
import asset3 from "/asset3.png"; // QR code in the center
import asset4 from "/asset4.png";
import asset5 from "/asset5.png";

const Footer = () => {
  const menuClass = "flex flex-col items-center text-white";
  const iconClass = "h-24 w-24";
  const labelClass = "text-10 mt-4";

  return (
    <footer className="fixed bottom-0 flex h-70 w-full items-center justify-around bg-eworld p-10">
      <div className={menuClass}>
        <img src={asset1} alt="Home" className={iconClass} />
        <span className={labelClass}>HOME</span>
      </div>
      <div className={menuClass}>
        <img src={asset2} alt="Map" className={iconClass} />
        <span className={labelClass}>MAP</span>
      </div>

      <div className="bg-#fff rounded-50% -mt-20 flex h-70 w-70 items-center justify-center first-letter:p-10">
        <img src={asset3} alt="QR Code" className="h-40 w-40" />
      </div>

      <div className={menuClass}>
        <img src={asset4} alt="Stamp" className={iconClass} />
        <span className={labelClass}>STAMP</span>
      </div>
      <div className={menuClass}>
        <img src={asset5} alt="My" className={iconClass} />
        <span className={labelClass}>MY</span>
      </div>
    </footer>
  );
};

export default Footer;
