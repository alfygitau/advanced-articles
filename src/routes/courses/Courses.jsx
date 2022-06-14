import { useQuery, useQueryClient } from "react-query";
import { getCourses } from "../../api/axiosPost";
import styled from "styled-components";

export const Courses = () => {

  const {
    isLoading,
    isError,
    error,
    data: courses,
  } = useQuery("courses", getCourses);

  console.log(courses);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = courses.slice(0, 20).map((course) => (
      <div>
        <p>{course.university}</p>
        <h4>{course.title}</h4>
        <p>{course.description}</p>
      </div>
    ));
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Available courses</h3>
      <Wrapper>{content}</Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
`;
