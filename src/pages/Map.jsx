import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Map } from "react-kakao-maps-sdk";

const kakaoMap = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.mapPage}>
        <Header title="Map"></Header>
        <Map
          className={styles.kakaoMap}
          center={{ lat: 35.85336, lng: 128.563916 }}
          style={{ width: "100%", flex: "1 0 auto" }}
          level={3}
        />
        <Footer></Footer>
      </div>
    </>
  );
};

export default kakaoMap;
