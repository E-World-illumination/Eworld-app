import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const navigate = useNavigate();
  const title = props.title;
  const isBack = props.isBack;

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <>
      <div className="flex w-full items-center justify-between bg-[url('/title_bg.png')] bg-cover bg-center py-10">
        <div className="ml-15 h-20 w-20 text-white">
          {isBack && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ width: "20px", height: "20px" }}
              onClick={handleBack}
            />
          )}
        </div>
        <div>
          <h2 className="text-26 font-bold text-white">{title}</h2>
        </div>
        <div className="invisible ml-10 w-30"></div>
      </div>
    </>
  );
}
