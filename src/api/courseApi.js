import { get } from "./apiClient";

export const fetchCourse = async () => {
  try {
    const response = await get("/user/stamp_course");
    return response.data.data;
  } catch (error) {
    console.log("코스정보를 불러오는중 오류 발생:", error);
  }
};
