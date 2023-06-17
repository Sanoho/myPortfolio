import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Pc from "./Pc";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 155px;
  height: auto;
  padding: 18px;
  background-color: #ffffffe0;
  border-radius: 10px;
  position: absolute;
  bottom: 130px;
  left: 500px;
  letter-spacing: 1.2px;
  color: #da4ea2;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 150px;
    height: 63px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 100px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    left: 90px;
    gap: 100px;
  }
`;

const Button = styled.button`
  color: #da4ea2;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.6s;
  font-weight: bold;

  &:hover {
    scale: 1.2;
  }
`;

const handleClick = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 100);
};

function Hangman() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Pc />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        A CLI based game to showcase the use of Python, SQLAlchemy, OOP.
      </Desc>
      <ButtonContainer>
        <Button
          onClick={() =>
            handleClick(
              "https://www.loom.com/share/61e833f5d73343739fef4366bc7e44ff"
            )
          }
        >
          Demo
        </Button>
        <Button
          onClick={() => handleClick("https://github.com/Sanoho/Hangman")}
        >
          Repo
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Hangman;
