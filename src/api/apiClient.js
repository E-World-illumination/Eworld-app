import axios from "axios";

const BASE_URL = "http://ec2-3-27-186-168.ap-southeast-2.compute.amazonaws.com";

export const get = async (path, token = null) => {
  const response = await axios({
    url: `${BASE_URL}${path}`,
    method: "GET",
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  });
  return response;
};

export const post = async (path, data, token = null) => {
  const response = await axios({
    url: `${BASE_URL}${path}`,
    method: "POST",
    data,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  });
  return response;
};

export const put = async (path, data, token = null) => {
  const response = await axios({
    url: `${BASE_URL}${path}`,
    method: "PUT",
    data,
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  });
  return response;
};

export const del = async (path, token = null) => {
  const response = await axios({
    url: `${BASE_URL}${path}`,
    method: "DELETE",
    ...(token && { headers: { Authorization: `Bearer ${token}` } }),
  });
  return response;
};

export const loginUrl = {
  kakao: `${BASE_URL}/auth/kakao`,
  google: `${BASE_URL}/auth/google`,
  naver: `${BASE_URL}/auth/naver`,
};
