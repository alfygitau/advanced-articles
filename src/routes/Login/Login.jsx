import React, { useState } from "react";
import { Button, Image } from "../../components/Navigation/Navigation";
import styled from "styled-components";
import axios from "../../api/axios";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const user = response?.data;
      setAuth({ user });
      navigate(from, { replace: true });
      localStorage.setItem("userId", JSON.stringify(user.id));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Section>
        <Span>
          <Logo>
            <img
              src="https://assets.website-files.com/60d9feb9c76d589e5bee9402/60da12b71d91fe9ed643dbb4_logo-course-x-template.svg"
              alt="logo"
            />
          </Logo>
        </Span>
        <Heading>Welcome Client</Heading>
        <Form onSubmit={handleSubmit}>
          <Label>Enter your username</Label>
          <Input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>Enter your password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">Login</LoginButton>
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
  border: 1px solid rgb(231, 233, 235);
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
export const Logo = styled(Image)`
  text-align: center;
`;
const Span = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
`;
