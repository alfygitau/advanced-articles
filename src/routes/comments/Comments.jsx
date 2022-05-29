import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components"
import { nanoid } from "nanoid";

const Comments = () => {
  const {
    loading,
    data: comments,
    error,
  } = useFetch("https://dummyjson.com/comments");

  const commentId = nanoid();

  console.log(comments);

  const content = comments?.comments?.map((comment) => (
    <article key={comment.id}>
      <h5>{comment.user.username}</h5>
      <p>{commentId}</p>
      <p>{comment.body}</p>
    </article>
  ));

  return <Main>{content}</Main>;
};

export default Comments;

const Main = styled.div`
    width: 60%;
    height: fit-content;
    margin-right: auto;
    margin-left: auto;
`
