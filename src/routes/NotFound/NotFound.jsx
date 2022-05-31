import React from "react";
import styled from "styled-components";

const NotFound = () => {
  const sentence =
    "The page you are looking for doesn't exist or has been moved.";
  const title = "Page Not Found";

  return (
    <Container>
      <h3>{title}</h3>
      <h5>{sentence}</h5>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  height: fit-content;
`;
