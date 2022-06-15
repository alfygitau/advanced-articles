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
    content = courses.slice(90).map((course) => (
      <Content>
        <p>{course.university}</p>
        <h4>{course.title}</h4>
        <p>{course.description}</p>
      </Content>
    ));
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Available courses</h3>
      <Wrapper>
        <Container>{content}</Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  
`;
const Container = styled.div`
  height: fit-content;
  width: 70%;
  margin: auto;
`;
