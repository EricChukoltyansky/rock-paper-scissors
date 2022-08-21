import React from "react";
import styled from "styled-components";
import Choose from "../Choose/Choose";
import Score from "../Score/Score";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChooseContainer = styled.div`
  border: 1px solid red;
  align-items: center;
  justify-content: center;
  height: 650px;
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
    </>
  );
}

export default Dashboard;
