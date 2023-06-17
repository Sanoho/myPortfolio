import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  scroll-snap-align: center;
  width: 1300px;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
  font-size: 24px;
  color: lightgray;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  width: 120px;
  transition: 1s;

  &:hover {
    scale: 0.9;
  }
`;

const handleClick = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 100);
};

const Who = () => {
  return (
    <Section>
      <Container id="about">
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Aim for the Stars</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I Am</Subtitle>
          </WhatWeDo>
          <Desc>
            I am a highly proficient Full Stack software developer with a
            diverse skill set encompassing JavaScript, React, Next.js, Node.js,
            Express, Prisma, Python, and Flask. My expertise lies in creating
            cutting-edge, efficient, and scalable solutions that address
            real-world challenges. I possess a keen aptitude for rapid learning
            and thrive in collaborative environments, working closely with
            clients to transform their ideas into tangible, user-friendly
            implementations. I am eager to join forces with you and breathe life
            into your visionary concepts.
          </Desc>
          <ButtonContainer>
            <Button
              onClick={() => {
                document.getElementById("projects").scrollIntoView();
              }}
            >
              My Projects
            </Button>
            <Button>Achievements</Button>
            <Button
              onClick={() =>
                handleClick(
                  "https://docs.google.com/document/d/11ERrsGYwabMiTBQapsqkI6qARy0fX2j9tYBh7MdfFio/edit?usp=sharing"
                )
              }
            >
              Resume
            </Button>
          </ButtonContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
