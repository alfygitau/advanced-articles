import React, { useState } from "react";
import styled from "styled-components";

const CreateArticle = () => {
  const [author, setAuthor] = useState("");
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Section>
      <Heading>Create a new article</Heading>
      <Form>
        <label htmlFor="author">Author</label>
        <Input
          type="text"
          name="title"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="article-title">Article Title</label>
        <Input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thumbnail">Image-Url</label>
        <Input
          type="text"
          name="title"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="article-description">Article Description</label>
        <Textarea
          type="text"
          name="title"
          onChange={(e) => setDescription(e.target.value)}
        />
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
  border: 1px solid black;
`;
const Input = styled.input`
  margin-bottom: 20px;
  padding: 7px;
`;
const Textarea = styled.textarea`
  height: 80px;
`;

const Heading = styled.h5`
  text-align: center;
  text-transform: uppercase;
`;
