import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components"

const Comments = () => {
  const {
    loading,
    data: comments,
    error,
  } = useFetch("https://dummyjson.com/comments");

  console.log(comments);

  const content = comments?.comments?.map((comment) => (
    <article key={comment.id}>
      <h5>{comment.user.username}</h5>
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
