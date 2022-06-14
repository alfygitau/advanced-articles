import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <Text>Copyright@ CourseX International 2020</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(47, 141, 70);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
`;
