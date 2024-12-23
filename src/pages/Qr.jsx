import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import { toast, Bounce } from "react-toastify";
import jsQR from "jsqr";
import { fetchCourse } from "../api/courseApi";
import { addStampData } from "../api/stampApi";
import calculateDistance from "../utils/calculateDistance";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ShowAlert } from "../utils/AlertUtils.js";

const Qr = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 35.853415286993176,
    longitude: 128.56431610662824,
  });
  const [videoStream, setVideoStream] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      const data = await fetchCourse();
      setCourseData(data);
    };

    fetchCourseData();
  }, []);

  const handleQrCode = async () => {
    if (!qrData) {
      toast.error("QR 코드 데이터가 없습니다.");
      return;
    }

    // QR 데이터와 매칭되는 코스 데이터 찾기
    const locationData = courseData.find((item) => item.name === qrData);
    if (!locationData) {
      toast.error("코스 데이터와 매칭되지 않습니다.");
      return;
    }

    const { latitude, longitude, name_kr } = locationData;

    // 거리 계산
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      parseFloat(latitude),
      parseFloat(longitude),
    );

    // 거리 비교 (50m 이내)
    if (distance <= 50) {
      const response = await addStampData(qrData, token);

      if (response.status === "success") {
        await ShowAlert("success", "", `${name_kr} 추가 성공!`, false);

        if (response.data !== null) {
          await ShowAlert("info", "", `${response.data}`, false);
        }

        navigate("/stamp");
      }
      if (response.status === "error") {
        await ShowAlert("error", "", `${response.message}`, false);
      }
    } else {
      await ShowAlert(
        "error",
        "",
        `${name_kr} 위치와 일치하지 않습니다.`,
        false,
      );
    }
  };

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        setVideoStream(stream);
        setPermissionGranted(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {}
    };
    if (permissionGranted === null) {
      requestCameraPermission();
    }

    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [permissionGranted, videoStream]);

  useEffect(() => {
    if (qrData) {
      toast.success(`${qrData}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      handleQrCode();
    }
  }, [qrData]);

  useEffect(() => {
    if (videoStream) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext("2d");

      const scan = () => {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = videoWidth;
          canvas.height = videoHeight;
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
          canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight);
          const imageData = canvasContext.getImageData(
            0,
            0,
            videoWidth,
            videoHeight,
          );

          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            setQrData(code.data);
          }
        }

        requestAnimationFrame(scan);
      };

      requestAnimationFrame(scan);
    }
  }, [permissionGranted, videoStream]);

  // 위도, 경도 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude }); //latitude: latitude, longitude: longitude 가 생략된 것
          console.log(userLocation);
        },
        (error) => {
          console.log(error);
        },
      );
    } else {
      console.error("브라우저가 Geolocation API를 지원하지 않습니다.");
    }
  }, []);

  return (
    <>
      <Header title="QR" isBack={false} />
      <div className="h-full bg-neutral-900">
        <div className="h-full w-full">
          {/* 중앙 정렬을 위한 flex 컨테이너 */}
          <div
            className="relative flex h-full w-full items-end justify-center"
            style={{ aspectRatio: "0.3 / 0.3" }}
          >
            <video
              className="absolute inset-auto h-full w-full object-cover"
              id="videoElement"
              ref={videoRef}
              autoPlay={true}
              playsInline
            ></video>
            <canvas
              className="absolute inset-auto h-full w-full object-cover"
              id="canvasElement"
              ref={canvasRef}
            ></canvas>
            {/* 카메라 화면 위에 이미지 추가 */}
            <img
              src="/qr_line.png"
              alt="Overlay Image"
              className="absolute inset-y-1/4 h-200 w-200 object-contain"
            />
            {/* 카메라 화면 위에 텍스트 추가 */}
            <div className="absolute inset-y-2/3 flex items-end justify-center text-lg font-bold text-white">
              QR 코드를 인식해주세요
            </div>
          </div>
        </div>
      </div>
      <MenuBar color="home" menu="qr" />
    </>
  );
};

export default Qr;
