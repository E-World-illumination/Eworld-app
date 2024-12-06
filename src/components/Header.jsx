import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  let title = props.title;
  return (
    <>
      <div className="mt-48 flex w-full items-center justify-between">
        <div className="ml-15 mt-10">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div>
          <h2 className="text-26 font-bold">{title}</h2>
        </div>
        <div className="invisible ml-10 w-30">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </>
  );
}
