import React from "react";
import styled, { css } from "styled-components";
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

const Circle = styled.div.attrs((props: { color: string }) => props)`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
  border: 15px solid ${(props) => props.color};

  img {
    margin-top: 10px;
    margin-right: 7px;
    max-width: 90px;
    max-height: 90px;
  }
`;

function Choose() {
  return (
    <>
      <ChooseContainer>
        <Triangle>
          <TriangleImg src={triangle} alt="" />
        </Triangle>

        <Circle color="red">
          <img src={rock} alt="" />
        </Circle>
        <Circle color="yellow">
          <img src={scissors} alt="" />
        </Circle>
        <Circle color="green">
          <img src={paper} alt="" />
        </Circle>
      </ChooseContainer>
    </>
  );
}

export default Choose;
