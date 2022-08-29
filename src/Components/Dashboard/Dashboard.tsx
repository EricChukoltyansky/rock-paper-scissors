import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Battle from "../Battle/Battle";
import Choose from "../Choose/Choose";
import Rules from "../Rules/Rules";
import Score from "../Score/Score";
import { images } from "../images.js";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChooseContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const Button = styled.button`
  background-color: transparent;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  float: right;
  margin-right: 100px;
`;

const Modal = styled.div`
  position: absolute;
  top: 40%;
  left: 39%;
`;

function Dashboard() {
  const [modal, setModal] = useState(false);
  const [battleComponent, setBattleComponent] = useState(false);
  const [chosenItem, setChosenItem] = useState<{ src: string; name: string }>();

  let modalRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setModal(!modal);
  };

  const showBattleComponent = () => {
    setBattleComponent(true);
  };

  const onChoose = (e: any) => {
    // setChosenItem({ src: e.target.src, name: e.target.name });

    const item = images.find((item) => {
      console.log("item.src:", item.src);
      console.log("e.target.src:", e.target.src);
      return (item.src = e.target.src);
    });

    console.log("item", item);
    setChosenItem(item);
  };
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <ScoreContainer>
        <Score />
      </ScoreContainer>
      {battleComponent ? (
        <Battle imageSrc={chosenItem} />
      ) : (
        <ChooseContainer>
          <Choose handleChoose={onChoose} trigger={showBattleComponent} />
        </ChooseContainer>
      )}

      <Button onClick={() => setModal((modal) => !modal)}>Rules</Button>
      {modal && (
        <>
          <Modal ref={modalRef} onClick={handleClose}>
            <Rules onClose={handleClose} />
          </Modal>
        </>
      )}
    </>
  );
}

export default Dashboard;
