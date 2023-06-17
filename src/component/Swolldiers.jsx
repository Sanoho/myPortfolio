import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Weight from "./Weight";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 170px;
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
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    width: 150px;
    height: 80px;
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

function Swolldiers() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Weight />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        A workout app created with React that utilizes Routes, Javascript, CSS
        and Semantic UI.
      </Desc>
      <ButtonContainer>
        {/* <Button onClick={() => handleClick()}>Demo</Button> */}
        <Button
          onClick={() =>
            handleClick(
              "https://github.com/bbissette3/phase-2-group-project-swolldiers"
            )
          }
        >
          Repo
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Swolldiers;
