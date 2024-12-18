import { get, post, del } from "./apiClient";

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

const userModify = async (token, data) => {
  try {
    const response = await post(`/user/modify`, data, token);
    console.log(response);
    return response;
  } catch (error) {
    console.error("회원 정보 수정 에러 : ", error);
    return false;
  }
};

const userCoupon = async (token) => {
  try {
    const response = await get(`/user/coupon`, token);
    console.log(response.data.data[0]);
    return response.data.data[0];
  } catch (error) {
    console.error("회원 쿠폰 요청 에러 : ", error);
    return false;
  }
};

const userDelete = async (token) => {
  try {
    const response = await get(`/user/delete`, token);
    return response.data;
  } catch (error) {
    console.error("회원 삭제 에러 : ", error);
    return false;
  }
};

const userEvent = async (token) => {
  try {
    const response = await get(`/user/event_entry_check`, token);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("이벤트 조회 에러 : ", error);
    return false;
  }
};

export { userInfo, userModify, userCoupon, userDelete, userEvent };
