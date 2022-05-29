import { nanoid } from "nanoid";
import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";

const ArticlesList = () => {
  const {
    loading,
    data: articles,
    error,
  } = useFetch("http://localhost:8000/articles");

  const Id = nanoid();

  const content = articles?.map((article) => (
    <MainContainer key={article.title}>
      <Main>
        <Initial>
          <h4>Title: {article.title.toUpperCase()}</h4>
          <p>Article Id: {Id}</p>
          <span>Author: {article.author}</span>
        </Initial>
        <ImageWrapper>
          <Image src={article.imageUrl} alt="slice" />
        </ImageWrapper>
      </Main>
      <div>
        <p>{article.description}</p>
      </div>
      <hr/>
    </MainContainer>
  ));

  return (
    <>
      <Article>
        <div>{content}</div>
      </Article>
    </>
  );
};

export default ArticlesList;

const Article = styled.div`
  width: 60%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
`;
const Main = styled.section`
  display: flex;
  width: 100%;
  /* border: 1px solid black; */
  height: 200px;
`;
const Image = styled.img`
  height: 90%;
  width: 90%;
  margin: auto;
`;
const Initial = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
`;
const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
`;
