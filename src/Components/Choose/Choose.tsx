import React from "react";
import styled from "styled-components";
import triangle from "../../assets/bg-triangle.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";
import paper from "../../assets/icon-paper.svg";

const ChooseContainer = styled.div`
  height: 650px;
  display: flex;
justify-content: center;
align-items: center;
`;

const Triangle = styled.div`
  border: 1px solid red;
  width: fit-content;
`;

const TriangleImg = styled.img`
  width: fit-content;
  height: fit-content;
`;

const Rock = styled.div`
  border-radius: 50%;
  border: 10px solid red;
`;

function Choose() {
  return (
    <>
      <ChooseContainer>
        <Triangle>
          <TriangleImg src={triangle} alt="" />
        </Triangle>

        <Rock>
          <img src={rock} alt="" />
        </Rock>
      </ChooseContainer>
    </>
  );
}

export default Choose;
