import React from "react";
import { Image } from "../../components/Navigation/Navigation";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Section>
        <Span>
          <Logo>Articles</Logo>
        </Span>
        <Heading>Welcome Client</Heading>
        <Form>
          <Label>Enter your username</Label>
          <Input type="text" placeholder="Enter your username" />
          <Label>Enter your password</Label>
          <Input type="password" placeholder="Enter your password" />
        </Form>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  width: 60%;
  height: 60%;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid rgb(231,233,235);
  border-radius: 10px;
`;
const Heading = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(47, 141, 70);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  align-items: center;
  /* border: 1px solid black; */
  margin-right: auto;
  margin-left: auto;
`;
const Label = styled.label`
  /* padding-bottom : 20px; */
  padding-top: 10px;
  padding-bottom: 5px;
`;
const Input = styled.input`
  width: 400px;
  padding: 10px;
  border-radius: 5px;
`;
const Logo = styled(Image)`
  text-align: center;
`;
const Span = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
