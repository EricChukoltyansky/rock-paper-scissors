import React from "react";
import styled from "styled-components";
import close from "../../assets/icon-close.svg";
import rules from "../../assets/image-rules.svg";

const Container = styled.div`
  display: flex;
`;

const RulesLine = styled.div`
  display: flex;
  justify-content: space-around;
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
          <div>Rules</div>
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
