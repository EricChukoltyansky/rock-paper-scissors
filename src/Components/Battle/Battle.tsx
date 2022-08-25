import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;

function Battle({ imageSrc }: { imageSrc: string }) {
  return (
    <Container>
      <Circle>
        <img src={imageSrc} alt="" />
      </Circle>
    </Container>
  );
}

export default Battle;
