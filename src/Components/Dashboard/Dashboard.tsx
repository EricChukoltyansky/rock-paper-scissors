import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Choose from "../Choose/Choose";
import Rules from "../Rules/Rules";
import Score from "../Score/Score";

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

  let modalRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    console.log("handleClose Button", modal);
    setModal(!modal);
  };

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      console.log("handler modalRef current", modalRef.current);
      console.log("handler inside useEffect", modal);
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
      {console.log(modal)}
      <ScoreContainer>
        <Score />
      </ScoreContainer>
      <ChooseContainer>
        <Choose />
      </ChooseContainer>
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
