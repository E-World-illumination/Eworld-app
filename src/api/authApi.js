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

export { fetchAllIds };
