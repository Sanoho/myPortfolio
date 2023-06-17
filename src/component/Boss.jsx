import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Supra from "./Supra";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
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
    /* left: 90px; */
    /* gap: 100px; */
    left: 170px;
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

function Boss() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Supra />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        An HTML/Javascript app that allowed the user to list and see car
        submissions.
      </Desc>
      <ButtonContainer>
        {/* <Button onClick={() => hanxdleClick()}>Demo</Button> */}
        <Button
          onClick={() =>
            handleClick("https://github.com/DirtyKeyboard/phase-1-project")
          }
        >
          Repo
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Boss;
