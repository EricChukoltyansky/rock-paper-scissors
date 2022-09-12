import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { images } from "../images";

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
  /* border: 1px solid red; */
  justify-content: space-around;
`;

const Winner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
  }

  button {
    cursor: pointer;
  }
`;

function Battle({
  imageSrc,
  trigger,
  score,
  setScore,
}: {
  imageSrc: string[] | undefined;
  trigger: React.MouseEventHandler<HTMLButtonElement> | undefined;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [randomImage, setRandomImage] = useState("");
  const [randomImageName, setRandomImageName] = useState("");
  const [winner, setWinner] = useState("");

  const getRandomImage = () => {
    const keys = Object.keys(images);
    const randomKey = keys[
      Math.floor(Math.random() * keys.length)
    ] as keyof typeof images;

    const randomImage = images[randomKey];
    const randomImageName = randomKey;

    setRandomImage(randomImage);
    // @ts-ignore
    setRandomImageName(randomImageName);
  };

  const getWinner = (player: string, computer: string) => {
    if (player === computer) {
      setWinner("DRAW");
    } else if (player === "rock") {
      if (computer === "paper") {
        setWinner("AI WIN");
      } else {
        setWinner("YOU WIN");
        setScore(score + 1);
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        setWinner("AI WIN");
      } else {
        setWinner("YOU WIN");
        setScore(score + 1);
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        setWinner("AI WIN");
      } else {
        setWinner("YOU WIN");
        setScore(score + 1);
      }
    }
  };

  useEffect(() => {
    getRandomImage();
    // console.log(imageSrc[0], randomImageName);
    // @ts-ignore
    getWinner(imageSrc[0], randomImageName);
    console.log("I am useEffect battle");
  }, []);

  console.log("I am Battle Component");
  return (
    <Container>
      <Circle>
        {/* @ts-ignore */}
        <img src={imageSrc[1]} alt="" />
      </Circle>
      <Winner>
        <h1>{winner}</h1>
        <button
          onClick={() => {
            setWinner("");
            // @ts-ignore
            trigger();
          }}
        >
          PLAY AGAIN
        </button>
      </Winner>
      <Circle>
        <img src={randomImage} alt="" />
      </Circle>
    </Container>
  );
}

export default Battle;
