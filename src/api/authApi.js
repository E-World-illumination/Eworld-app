import { get, post, put, del } from "./apiClient";

const fetchAllIds = async () => {
  try {
    const response = await get("/auth/get-all-ids");
    return response.data; // id 배열 반환
  } catch (error) {
    console.error("Error fetching IDs:", error);
    return [];
  }
};

const checkDuplicate = async (id) => {
  try {
    const response = await post(`/auth/duplicate`, { id: id });
    return response.data;
  } catch (error) {
    console.error("중복확인 에러 : ", error);
    return false;
  }
};

const userLogin = async (id, password) => {
  try {
    const response = await post(`/auth/login`, { id, password });

    return response.data;
  } catch (error) {
    console.error("로그인 에러 : ", error);
    return false;
  }
};

const userInfo = async (token) => {
  try {
    console.log(token);
    const response = await get(`/user/data`, token);

    return response.data;
  } catch (error) {
    console.error("회원 정보 요청 에러 : ", error);
    return false;
  }
};

const googleLogin = async () => {
  try {
    const response = await get("/auth/google");
    return response.data;
  } catch (error) {
    console.error("구글 로그인 에러 : ", error);
    return false;
  }
};

export { fetchAllIds, checkDuplicate, userLogin, userInfo };
