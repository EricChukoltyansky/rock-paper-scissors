import React from "react";
import styled from "styled-components";
import Choose from "../Choose/Choose";
import Score from "../Score/Score";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChooseContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const Button = styled.button`
  background-color: transparent;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  float: right;
    margin-right: 100px;
`;

function Dashboard() {
  return (
    <>
      <ScoreContainer>
        <Score />
      </ScoreContainer>
      <ChooseContainer>
        <Choose />
      </ChooseContainer>
      <Button>Rules</Button>
    </>
  );
}

export default Dashboard;
