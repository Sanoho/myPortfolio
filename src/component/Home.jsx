import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Astro from "./Astro";

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  scroll-snap-align: center;
  width: 1300px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 40px;
`;

const Desc = styled.p`
  color: lightgray;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  width: 100px;
  transition: 1s;

  &:hover {
    scale: 0.9;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Section>
      <Navbar />
      <Container id="home">
        <Left>
          <Title>Hello, my name is Tim Hoang.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc>
            I develop dynamic, attractive, user-friendly web applications.
          </Desc>
          <Button
            onClick={() => {
              document.getElementById("about").scrollIntoView();
            }}
          >
            Learn More
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Astro />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
