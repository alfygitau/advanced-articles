import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "../../api/axios";
import { Button, Image } from "../../components/Navigation/Navigation";
// import { Logo } from "../Login/Login";

const CreateArticle = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const article = { author, title, imageUrl: image, description };
    try {
      const res = axios.post("http://localhost:8000/articles", article);
      console.log(res.data);
      navigate("/articles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <LogoContainer>
        <Image>
          <img
            src="https://assets.website-files.com/60d9feb9c76d589e5bee9402/60da12b71d91fe9ed643dbb4_logo-course-x-template.svg"
            alt="logo"
          />
        </Image>
      </LogoContainer>
      <Heading>Create a new article</Heading>
      <Form onSubmit={handleCreate}>
        <label htmlFor="author">Author</label>
        <Input
          type="text"
          name="author"
          data-testid="author-input"
          id="author"
          placeholder="Enter the author's name"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="article-title">Article Title</label>
        <Input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
        <label htmlFor="thumbnail">Image-Url</label>
        <Input
          type="text"
          name="thumbnail"
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image url"
        />
        <label htmlFor="article-description">Article Description</label>
        <Textarea
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the description"
        />
        <Wrapper>
          <Button data-testid="create">Create</Button>
        </Wrapper>
      </Form>
    </Section>
  );
};

export default CreateArticle;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  /* border: 1px solid black; */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
`;

const Section = styled.div`
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  height: fit-content;
  border: 1px solid rgb(231, 233, 235);
`;
const Input = styled.input`
  margin-bottom: 20px;
  padding: 7px;
`;
const Textarea = styled.textarea`
  height: 80px;
  margin-bottom: 20px;
`;

const Heading = styled.h5`
  text-align: center;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
