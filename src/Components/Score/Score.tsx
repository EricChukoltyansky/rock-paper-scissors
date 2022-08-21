import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const ScoreContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid grey;
  width: 50%;
  border-radius: 10px;
  height: 200px;
`;

const ImgContainer = styled.div`
  display: flex;
`;

const ScoreTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #f5f5f5;

  .scoreNumber {
    font-size: 70px;
  }
`;

function Score() {
  return (
    <>
      <ScoreContainer>
        <ImgContainer>
          <img src={logo} alt="" />
        </ImgContainer>
        <ScoreTitle>
          <p>SCORE</p>
          <p className="scoreNumber">10</p>
        </ScoreTitle>
      </ScoreContainer>
    </>
  );
}

export default Score;
