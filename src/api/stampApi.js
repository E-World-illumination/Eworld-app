import { get, post, put, del } from "./apiClient";

// 스탬프 개수 조회 (함수 자체에서 개수를 반환함. 오류시 0 반환)
const fetchStampData = async (token) => {
  try {
    const response = await get("/user/stamp", token);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("스탬프 조회 오류:", error);
    return 0;
  }
};

export { fetchStampData };
