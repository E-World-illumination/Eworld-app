import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  let title = props.title;
  return (
    <>
      <div className="mt-4 flex w-full items-center justify-between">
        <div className="ml-10 w-30">
          <FontAwesomeIcon icon={faArrowLeft} />
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
