import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  position: relative;
  width: fit-content;
`;

const TriangleImg = styled.img`
  width: fit-content;
  height: fit-content;
`;

const Circle = styled.div.attrs(
  (props: {
    color: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
  }) => props
)`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
  border: 15px solid ${(props) => props.color};
  position: absolute;
  background: white;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  img {
    margin-top: 10px;
    margin-right: 7px;
    max-width: 90px;
    max-height: 90px;
  }
`;

function Choose({
  handleChoose,
  trigger,
}: {
  handleChoose: (e: any) => void;
  trigger: React.MouseEventHandler<HTMLDivElement>;
}) {
  const images = [
    { src: rock, name: "rock" },
    { src: scissors, name: "scissors" },
    { src: paper, name: "paper" },
  ];

  return (
    <>
      <ChooseContainer onClick={trigger}>
        <Triangle>
          <TriangleImg src={triangle} alt="" />
        </Triangle>
        <Circle color="red" top="600px" onClick={(e) => handleChoose(e)}>
          <img src={images[0].src} alt="" />
        </Circle>
        <Circle
          color="yellow"
          top="350px"
          right="750px"
          onClick={(e) => handleChoose(e)}
        >
          <img src={images[1].src} alt="" />
        </Circle>
        <Circle
          color="green"
          top="350px"
          left="750px"
          onClick={(e) => handleChoose(e)}
        >
          <img src={images[2].src} alt="" />
        </Circle>
      </ChooseContainer>
    </>
  );
}

export default Choose;
