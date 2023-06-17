import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  z-index: 20;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  width: 1400px;
  position: fixed;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    position: sticky;
  }
`;

const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  color: grey;
  cursor: pointer;

  &:hover {
    color: white;
    font-weight: bold;
  }

  &:active {
    color: white;
  }
`;

const Icons = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  transition: 1s;

  &:hover {
    scale: 0.9;
  }
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem
              onClick={() => {
                document.getElementById("home").scrollIntoView();
              }}
            >
              Home
            </ListItem>
            <ListItem
              onClick={() => {
                document.getElementById("about").scrollIntoView();
              }}
            >
              About
            </ListItem>
            <ListItem
              onClick={() => {
                document.getElementById("projects").scrollIntoView();
              }}
            >
              Projects
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button
            onClick={() => {
              document.getElementById("contact").scrollIntoView();
            }}
          >
            Contact me
          </Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
