import React, { useState } from "react";
import styled from "styled-components";
import PokeFun from "./PokeFun";
import PetAdopter from "./PetAdopter";
import Hangman from "./Hangman";
import Swolldiers from "./Swolldiers";
import Boss from "./Boss";

const data = ["PokéFun", "PetAdopter", "Hangman", "Swolldiers", "BOSS"];

const Section = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  scroll-snap-align: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  color: transparent;
  cursor: pointer;
  font-size: 90px;
  font-weight: bold;
  position: relative;
  -webkit-text-stroke: 1px white;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    left: 0;
    top: 0;
    color: #da4ea2;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    transition: 1.2s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Projects = () => {
  const [project, setProject] = useState("PokéFun");

  return (
    <Section>
      <Container id="projects">
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setProject(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {project === "PokéFun" ? (
            <PokeFun />
          ) : project === "PetAdopter" ? (
            <PetAdopter />
          ) : project === "Hangman" ? (
            <Hangman />
          ) : project === "Swolldiers" ? (
            <Swolldiers />
          ) : (
            <Boss />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;
