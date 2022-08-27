import React, { useState, useEffect } from "react";
import styled from "styled-components";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";
import paper from "../../assets/icon-paper.svg";

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
  /* position: absolute; */
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

const Container = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  justify-content: space-around;
`;

function Battle({ imageSrc }: { imageSrc: string }) {
  const [randomImage, setRandomImage] = useState("");
  const [winner, setWinner] = useState("");

  const randomImageSrc = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        setRandomImage(rock);
        break;
      case 1:
        setRandomImage(scissors);
        break;
      case 2:
        setRandomImage(paper);
        break;
    }
  };

  const compare = (player: string, computer: string) => {
    if (player === computer) {
      setWinner("draw");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      setWinner("player");
    } else {
      setWinner("computer");
    }
  };
  useEffect(() => {
    randomImageSrc();
  }, []);

  return (
    <Container>
      <Circle>
        <img src={imageSrc} alt="" />
      </Circle>
      <Circle>
        <img src={randomImage} alt="" />
      </Circle>
    </Container>
  );
}

export default Battle;
