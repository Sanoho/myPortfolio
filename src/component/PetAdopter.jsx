import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shiba from "./Shiba";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 150px;
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

function PetAdopter() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shiba />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        A full-stack app with a React frontend and Python/Flask backend.
      </Desc>
      <ButtonContainer>
        <Button
          onClick={() =>
            handleClick(
              "https://www.loom.com/share/6ce6398e809c41339620b9eb25215e85"
            )
          }
        >
          Demo
        </Button>
        <Button
          onClick={() =>
            handleClick("https://github.com/FredPerez15/pet-adopter")
          }
        >
          Repo
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PetAdopter;
