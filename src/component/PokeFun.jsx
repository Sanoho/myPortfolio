import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Poke from "./Poke";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 205px;
  height: auto;
  padding: 18px;
  background-color: #ffffff44;
  border-radius: 10px;
  position: absolute;
  bottom: 130px;
  left: 500px;
  letter-spacing: 1.2px;
  color: white;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 90px;
  }
`;

const Techs = styled.div`
  display: flex;
  font-size: 10px;
  gap: 5px;
  margin-top: 10px;
`;

const Tech1 = styled.p`
  /* background: -webkit-linear-gradient(#eee, #333); */
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 12px;
`;

const Tech2 = styled.p`
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 12px;
`;

const Tech3 = styled.p`
  /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 12px;
`;

const Tech4 = styled.p`
  background: #ec008c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ec008c,
    #fc6767
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ec008c,
    #fc6767
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 100px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    gap: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Button = styled.button`
  background-color: #ffffff44;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.6s;
  font-weight: bold;

  &:hover {
    scale: 1.2;
    color: #da4ea2;
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
        <Techs>
          <Tech1>NextJS</Tech1>
          <Tech2>Prisma</Tech2>
          <Tech3>Tailwind</Tech3>
          <Tech4>Framer</Tech4>
        </Techs>
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
