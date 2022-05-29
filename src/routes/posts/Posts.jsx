import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import Post from "./Post";

const Posts = () => {
  const { loading, data, error } = useFetch("https://dummyjson.com/posts");

  console.log(data);

  return (
    <Container>
      <PostsWrapper>
        {data?.posts?.slice(0, 10).map((post) => (
          <Post post={post} id={post.id} />
        ))}
      </PostsWrapper>
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const PostsWrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
`;
