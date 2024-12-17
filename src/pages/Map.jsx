import React, { useState, useRef, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { fetchCourse } from "../api/courseApi";
import { useAuth } from "../provider/AuthProvider";
import { fetchStampData } from "../api/stampApi";

const Map = () => {
  const [selectedInfo, setSelectedInfo] = useState(null); // 클릭한 마커 정보를 저장할 상태
  const stampInfoRef = useRef(null); // stamp_info div에 대한 참조
  const [courseData, setCourseData] = useState([]);
  const [stamp, setStamp] = useState([]);
  const stampedIndexes = new Set(stamp.map((item) => item.stamp));
  const { token } = useAuth();

  useEffect(() => {
    const fetchCourseData = async () => {
      const response = await fetchCourse();
      setCourseData(response);
    };
    fetchCourseData();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchStamp = async () => {
        const stampData = await fetchStampData(token);
        setStamp(stampData);
      };
      fetchStamp();
    }
  }, [token]);

  useEffect(() => {
    console.log(courseData);
    console.log(stamp);
    console.log(stampedIndexes);
  }, [courseData, stamp]);

  // 마커 클릭 핸들러
  const markerClick = (info) => {
    setSelectedInfo(info); // 클릭한 마커 정보 저장
    {
      console.log(selectedInfo);
    }
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
      <div className="flex h-full flex-col items-center">
        <div className="h-full w-full">
          {
            <Map
              center={{ lat: 35.851481636139084, lng: 128.56333034063334 }}
              style={{ width: "100%", height: "100%", flex: "1 0 auto" }}
              level={4}
            >
              {courseData.map((position, index) => (
                <MapMarker
                  key={position.name}
                  position={{
                    lat: position.latitude,
                    lng: position.longitude,
                  }} // 마커를 표시할 위치
                  image={{
                    src: stampedIndexes.has(position.key)
                      ? "/map/pin_on.png"
                      : "/map/pin_off.png", // 마커이미지의 주소
                    size: { width: 40, height: 36 }, // 마커이미지의 크기
                  }}
                  title={position.name_kr} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
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
                src={`/map/${selectedInfo.name}.png`}
                alt={selectedInfo.name_kr}
                width="290"
                className="rounded-[10px]"
              />
              <div className="flex justify-between">
                <div className="px-10 pt-20 text-20 font-bold leading-5">
                  {selectedInfo.name_kr}
                  <br />
                  <span className="text-14 font-medium text-neutral-500">
                    {selectedInfo.description}
                  </span>
                </div>
                <div className="pr-5 pt-10">
                  <img
                    src={
                      stampedIndexes.has(selectedInfo.key)
                        ? "/stamp/stamp_on.png"
                        : "/stamp/stamp_off.png"
                    }
                    alt=""
                    width="55"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <MenuBar color="home" menu="map" />
    </>
  );
};

export default Map;
