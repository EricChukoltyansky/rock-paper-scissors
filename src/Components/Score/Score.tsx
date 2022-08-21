import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  width: 50%;
  border-radius: 10px;
  height: 200px;
`;

function Score() {
  return (
    <>
      <ScoreContainer>
        <img src={logo} alt="" />
        <div>0</div>
      </ScoreContainer>
    </>
  );
}

export default Score;
