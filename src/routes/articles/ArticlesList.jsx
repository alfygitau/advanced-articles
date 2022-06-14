import { nanoid } from "nanoid";
import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import moment from "moment";

const ArticlesList = () => {
  const {
    loading,
    data: articles,
    error,
  } = useFetch("http://localhost:8000/articles");

  const Id = nanoid();
  const newDate = new Date().toString();
  const createdTime = moment().format("MMMM DD YYYY, hh:mm:ss");
  const lapse = moment(createdTime).fromNow();
  const now = moment();
  let before = moment("2022.04.12 09:00", "YYYY.MM.DD HH:mm");

  const timeElapsed = moment(now - before).format(
    "M[ month(s)] D[ day(s)] H[ hour(s)] m[ minute(s)] s[ second(s) ago.]"
  );

  const content = articles?.map((article) => (
    <MainContainer key={article.title}>
      <Main>
        <Initial>
          <Title>Title: {article.title.toUpperCase()}</Title>
          <Moment>Published: {timeElapsed}</Moment>
          <p>Article Id: {Id}</p>
          {/* <span>Created at: {newDate}</span> */}
          <Author>Author: {article.author}</Author>
        </Initial>
        <ImageWrapper>
          <Image src={article.imageUrl} alt="slice" />
        </ImageWrapper>
      </Main>
      <div>
        <Details>{article.description}</Details>
      </div>
      <hr />
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

const Title = styled.h4`
  color: rgb(47, 141, 70);
`;
const Author = styled.span`
  font-weight: bold;
`;
const Details = styled.p`
  text-align: justify;
  line-height: 1.8;
`;
const Moment = styled.span`
    font-size: 12px;
`
