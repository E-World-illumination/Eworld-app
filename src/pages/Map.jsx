import React, { useState, useRef, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

const kakaoMap = () => {
  const [selectedInfo, setSelectedInfo] = useState(null); // 클릭한 마커 정보를 저장할 상태
  const stampInfoRef = useRef(null); // stamp_info div에 대한 참조

  const positions = [
    {
      title: "매직 스테이션",
      latlng: { lat: 35.854724506405404, lng: 128.56065573148246 },
      imageUrl: "/map/magic_station.png",
      description: "이월드 정문 앞",
    },
    {
      title: "미라클 타임 에비뉴",
      latlng: { lat: 35.85442868059309, lng: 128.5619229052521 },
      imageUrl: "/map/miracle_time.png",
      description: "스카이웨이 맞은편 하트광장",
    },
    {
      title: "자이언트 토이프렌즈 광장",
      latlng: { lat: 35.853788772691104, lng: 128.56469979882883 },
      imageUrl: "/map/giant_toyfriends.png",
      description: "고스트하우스 앞 판타지 광장",
    },
    {
      title: "자이언트 매직북",
      latlng: { lat: 35.853415286993176, lng: 128.56431610662824 },
      imageUrl: "/map/giant_magicbook.png",
      description: "판타지 광장 분수대",
    },
    {
      title: "미라클 토이스토어",
      latlng: { lat: 35.85260567689759, lng: 128.56628156300133 },
      imageUrl: "/map/miracle_toystore.png",
      description: "탬버린 옆 다이나믹 광장",
    },
    {
      title: "자이언트 매직트리",
      latlng: { lat: 35.85222367526152, lng: 128.56568739063906 },
      imageUrl: "/map/magic_tree.png",
      description: "다이나믹 광장 타워 올라가는 길",
    },
  ];

  // 마커 클릭 핸들러
  const markerClick = (info) => {
    setSelectedInfo(info); // 클릭한 마커 정보 저장
  };

  // 외부 클릭 시 stamp_info 숨기기
  const clickOutside = (e) => {
    if (stampInfoRef.current && !stampInfoRef.current.contains(e.target)) {
      setSelectedInfo(null); // 외부를 클릭하면 stamp_info div를 숨김
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 클릭 이벤트 리스너 추가
    document.addEventListener("click", clickOutside);

    // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <>
      <Header title="Map" isBack={false} />
      <div className="mt-30 flex h-full flex-col items-center">
        <div className="h-full w-full">
          {
            <Map
              center={{ lat: 35.851481636139084, lng: 128.56333034063334 }}
              style={{ width: "100%", height: "100%", flex: "1 0 auto" }}
              level={4}
            >
              {positions.map((position) => (
                <MapMarker
                  key={position.title}
                  position={position.latlng} // 마커를 표시할 위치
                  image={{
                    src: "/map/pin_off.png", // 마커이미지의 주소
                    size: { width: 40, height: 36 }, // 마커이미지의 크기
                  }}
                  title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
                  onClick={() => markerClick(position)} // 클릭 시 해당 마커 정보 설정
                />
              ))}
            </Map>
          }
        </div>

        {/* stamp_info div가 선택된 마커 정보가 있을 때만 보이도록 조건부 렌더링 */}
        {selectedInfo && (
          <div
            className="fixed bottom-60 z-40 flex items-end"
            ref={stampInfoRef}
          >
            <div
              className={`h-260 w-330 rounded-t-[10px] bg-white p-20 shadow-customShadow`}
            >
              <img
                src={selectedInfo.imageUrl}
                alt={selectedInfo.title}
                width="290"
                className="rounded-[10px]"
              />
              <div className="flex justify-between">
                <div className="px-10 pt-20 text-20 font-bold leading-5">
                  {selectedInfo.title}
                  <br />
                  <span className="text-14 font-medium text-neutral-500">
                    {selectedInfo.description}
                  </span>
                </div>
                <div className="pr-5 pt-10">
                  <img src="/stamp/stamp_off.png" alt="" width="55" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <MenuBar color="eworld" menu="map" />
    </>
  );
};

export default kakaoMap;
