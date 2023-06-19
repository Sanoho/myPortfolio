import styled from "styled-components";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Who from "./component/Who";
import Projects from "./component/Projects";
import StarCanvas from "./component/StarCanvas";

const Container = styled.div`
  background: url("./img/bg.jpeg");
  color: white;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
  }
`;

function App() {
  return (
    <Container>
      <StarCanvas />
      <Home />
      <Who />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
