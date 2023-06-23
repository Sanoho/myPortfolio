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

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  scroll-snap-align: center;
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// const Img = styled.img`
//   width: 500px;
// `;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-right: 10%;
  left: 20%;

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
  color: #e7ac46;
  font-size: 40px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    margin: 0 5% 2%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const Links = styled.a`
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  width: 120px;
  transition: 1s;
  text-align: center;

  &:hover {
    scale: 0.9;
  }
`;

const Icon = styled.img`
  width: 35%;
  border: #e7ac46 2px solid;
  border-radius: 5px;
`;

const Icon1 = styled.img`
  width: 35%;
  border: #e7ac46 2px solid;
  border-radius: 5px;
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
          {/* <Img src="./img/heroPic.png" /> */}
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
            <Links
              onClick={() => {
                handleClick("https://www.linkedin.com/in/timothynhoang/");
              }}
            >
              <Icon src="./img/LinkedIn.png" alt="linkedIn icon" />
            </Links>
            <Links
              onClick={() => {
                handleClick("https://github.com/Sanoho");
              }}
            >
              <Icon1 src="./img/github.png" alt="github icon" />
            </Links>
            <Links onClick={() => handleClick("https://medium.com/@sanohoang")}>
              <Icon1 src="./img/medium.png" alt="medium icon" />
            </Links>
          </ButtonContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
