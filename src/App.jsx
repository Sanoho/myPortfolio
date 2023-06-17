import styled from "styled-components";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Who from "./component/Who";
import Projects from "./component/Projects";

const Container = styled.div`
  background: url("./img/spacebg.jpeg");
  color: white;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Home />
      <Who />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
