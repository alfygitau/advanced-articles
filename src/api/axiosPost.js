import axios from "axios";

const coursesAPI = axios.create({
  baseURL: "http://localhost:9000",
});

export const getCourses = async () => {
  const response = await coursesAPI.get("/courses");
  return response.data;
};

export const createCourse = async (course) => {
  return await coursesAPI.post("/courses", course);
};

export const updateCourse = async (course) => {
  return await coursesAPI.put(`/courses${course.id}`, course);
};

export const deleteCourse = async ({ id }) => {
  return await coursesAPI.delete(`/courses${id}`, id);
};

export default coursesAPI;
