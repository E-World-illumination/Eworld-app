import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const { kakao } = window;

const Map = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(kakao);
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.85336, 128.563916),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);

    // 마커
    let markerPosition = new kakao.maps.LatLng(35.85336, 128.563916);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 인포윈도우
    let iwContent = '<div style="padding:5px;">테스트</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = markerPosition; //인포윈도우 표시 위치입니다

    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    infowindow.open(map, marker);

    // 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      console.log("clicked");
    });
  }, []);

  return (
    <div className={styles.mapPage}>
      <Header title="Map"></Header>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <Footer></Footer>
    </div>
  );
};

export default Map;
