import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { images } from "../images.js";

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

function Battle({
  imageSrc,
}: {
  imageSrc: { src: string; name: string } | undefined;
}) {
  const [randomImage, setRandomImage] = useState("");
  const [randomImageName, setRandomImageName] = useState("");
  const [winner, setWinner] = useState("");

  const randomImageGenerator = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex].src);
    setRandomImageName(images[randomIndex].name);
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
    randomImageGenerator();
    console.log("randomImageName", randomImageName);
    console.log("imageSrc.name", imageSrc?.name);
    // @ts-ignore
    compare(imageSrc?.name, randomImageName);
  }, [imageSrc?.name, randomImageName]);

  return (
    <Container>
      <Circle>
        <img src={imageSrc?.src} alt="" />
      </Circle>
      <Circle>
        <img src={randomImage} alt="" />
      </Circle>
      {winner}
    </Container>
  );
}

export default Battle;
