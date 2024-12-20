import { get } from "./apiClient";

export const fetchCourse = async () => {
  try {
    const response = await get("/user/stamp_course");
    return response.data.data;
  } catch (error) {}
};
