import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import Post from "./Post";

const postUrl = process.env.REACT_APP_POSTS_URL;
// console.log(postUrl);

const Posts = () => {
  const { loading, data, error } = useFetch("https://dummyjson.com/posts");

  // console.log(data);

  return (
    <Container>
      <PostsWrapper>
        {data?.posts?.slice(0, 10).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsWrapper>
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
const PostsWrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
`;
