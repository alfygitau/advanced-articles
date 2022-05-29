import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";

const Post = ({ post }) => {
  console.log(post)
  const id = nanoid();

  return (
    <Wrapper>
      <Heading>{post.title}</Heading>
      <Id>Post Id: {id}</Id>
      <Paragraph>{post.body}</Paragraph>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  /* border: 1px solid black; */
`;
const Id = styled.span``;
// const Section = styled.span``;
const Paragraph = styled.p``;
const Heading = styled.h5``;
