import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createCourse } from "../../api/axiosPost";
import { Button } from "../../components/Navigation/Navigation";

export const CreateCourse = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [university, setUniversity] = useState("");
  const [description, setDescription] = useState("");

  const course = { image, title, university, description };
  console.log(course);
  const queryClient = useQueryClient();

  const createCourseMutation = useMutation(createCourse, {
    onSuccess: () => {
      // invalidate cache and refetch
      queryClient.invalidateQueries("courses");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourseMutation.mutate(course);
    navigate("/courses");
  };

  return (
    <Wrapper>
      <h4 style={{ textAlign: "center" }}>Create Course</h4>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="university">University</label>
        <Input
          type="text"
          placeholder="Enter your university"
          value={university}
          name="university"
          onChange={(e) => setUniversity(e.target.value)}
        />
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          placeholder="Enter the course title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image">Image-Url</label>
        <Input
          type="text"
          placeholder="Enter the url of image"
          value={image}
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <Textarea
          type="text"
          placeholder="Enter the course description"
          value={description}
          name="image"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Create Course</Button>
      </Form>
    </Wrapper>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid rgb(231, 233, 235);
  padding: 60px;
  height: fit-content;
`;
const Wrapper = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  height: 100vh;
`;
const Input = styled.input`
  padding: 7px;
  margin-bottom: 10px;
`;
const Textarea = styled.textarea`
  height: 60px;
  margin-bottom: 20px;
`;
