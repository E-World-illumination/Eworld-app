const BASE_URL = "http://ec2-3-27-186-168.ap-southeast-2.compute.amazonaws.com"; // API 기본 URL

export const apiClient = {
  async get(endpoint, token = null) {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}; // 토큰이 없으면 Authorization 헤더를 제외

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers,
    });
    if (!response.ok) throw new Error("API 요청 실패");
    return response.json();
  },

  async post(endpoint, data, token = null) {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // 토큰이 있으면 Authorization 추가
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("API 요청 실패");
    return response.json();
  },

  async put(endpoint, data, token = null) {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("API 요청 실패");
    return response.json();
  },

  async delete(endpoint, token = null) {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers,
    });
    if (!response.ok) throw new Error("API 요청 실패");
    return response.json();
  },
};

export const loginUrl = {
  kakao: `${BASE_URL}/auth/kakao`,
  google: `${BASE_URL}/auth/google`,
  naver: `${BASE_URL}/auth/naver`,
};
