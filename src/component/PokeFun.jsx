import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Poke from "./Poke";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 65px;
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
  }
`;

// const Techs = styled.div`
//   display: flex;
//   font-size: 10px;
//   gap: 5px;
// `;

// const Next = styled.p`
//   color: blue;
// `;

// const Prisma = styled.p`
//   color: black;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 100px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    gap: 50px;
    left: 70px;
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

function PokeFun() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Poke />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        A Pokemon app that allows users to play a mini game to earn coins and
        collect their own Pokemon.
        {/* <Techs>
          <Next>NextJS</Next>
          <Prisma>/Prisma</Prisma>
        </Techs> */}
      </Desc>
      <ButtonContainer>
        <Button onClick={() => handleClick("https://pokefun.vercel.app/")}>
          Website
        </Button>
        <Button
          onClick={() =>
            handleClick(
              "https://www.loom.com/share/16dccd803e394a19b836cf638e41eb28"
            )
          }
        >
          Demo
        </Button>
        <Button
          onClick={() => handleClick("https://github.com/Sanoho/pokefun")}
        >
          Repo
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PokeFun;
