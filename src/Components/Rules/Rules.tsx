import React from "react";
import styled from "styled-components";
import close from "../../assets/icon-close.svg";
import rules from "../../assets/image-rules.svg";

const Container = styled.div`
  display: flex;
  border: 1px solid grey;
  background-color: #f5f5f5;
  border-radius: 10px;
  /* height: 350px; */
  flex-direction: column;
`;

const RulesLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const RulesPic = styled.div`
  img {
    width: fit-content;
    height: fit-content;
  }
`;

function Rules() {
  return (
    <>
      <Container>
        <RulesLine>
          <div>RULES</div>
          <div>
            <img src={close} alt="" />
          </div>
        </RulesLine>
        <RulesPic>
          <img src={rules} alt="" />
        </RulesPic>
      </Container>
    </>
  );
}

export default Rules;
