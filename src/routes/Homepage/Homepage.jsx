import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Navigation/Navigation";

const Homepage = () => {
  return (
    <Container>
      <Wrapper>
        <Preview>
          <Content>
            <Heading>
              Live a healthy awesome life. Learn from the experts
            </Heading>
            <Paragraph>
              It’s a common myth that getting fit is only about eating healthy
              and exercising. In reality, creating a healthy lifestyle and
              maintaining it isn’t about just those two factors—it’s also about
              being able to keep a positive attitude, strong mental health and a
              healthy self-image. Although there is a ton of advice out there on
              how to achieve a healthy lifestyle, here are some key factors to
              keep in mind ..........
            </Paragraph>
            <Button>View All Articles</Button>
          </Content>
        </Preview>
        <ImageContainer>
          <Image src="https://media.self.com/photos/60e76fe01f69d35150b50014/4:3/w_2560%2Cc_limit/GettyImages-1254996115.jpg" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  display: flex;
  gap: 2em;
`;
const Preview = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* border: 1px solid black; */
`;
const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(231,233,235);
`;
const Heading = styled.h3`
  font-weight: bold;
  font-size: 32px;
  text-align: left;
  color: rgb(47, 141, 70);
`;
const Paragraph = styled.p`
    padding: 5px;
    line-height: 1.8;
`;
const Image = styled.img`
  width: 80%;
  height: 80%;
`;
const Content = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
`;
