import styles from "./styles.module.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  let title = props.title;
  return (
    <>
      <div className={styles.title}>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </div>
    </>
  );
}
