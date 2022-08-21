import React from "react";
import styled from "styled-components";
import Score from "../Score/Score";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Dashboard() {
  return (
    <>
      <DashboardContainer>
        <Score />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
