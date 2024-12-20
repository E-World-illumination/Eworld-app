import { get} from "./apiClient";

// 스탬프 개수 조회 (함수 자체에서 개수를 반환함. 오류시 0 반환)
const fetchStampData = async (token) => {
  try {
    const response = await get("/user/stamp", token);
    const data = response.data.data;
    if (data === undefined) {
      return 0;
    }
    return data;
  } catch (error) {
    console.error("스탬프 조회 오류:", error);
    return 0;
  }
};

const addStampData = async (qrData, token) => {
  try {
    const response = await get(`/user/add_stamp?stamp=${qrData}`, token);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("스탬프 추가 오류:", error.response.data); // 서버 에러 메시지 출력
      return error.response.data; // 서버 에러 메시지 반환
    }
    console.error("네트워크 또는 기타 오류:", error);
    return { status: "error", message: "알 수 없는 오류가 발생했습니다." }; // 기본 에러 메시지
  }
};

const fetchStampCount = async (token) => {
  try {
    const response = await get("/user/stamp", token);
    return response.data.data.length;
  } catch (error) {
    console.error("스탬프 조회 오류:", error);
    return 0;
  }
};

export { fetchStampData, addStampData, fetchStampCount };
