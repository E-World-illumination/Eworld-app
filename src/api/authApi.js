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
    return error;
  }
};

export { fetchAllIds, checkDuplicate, userLogin };
