import styled from "styled-components";
import View from "./page/View";
import { Box } from "@mui/material";
import SnowEffect from "./components/SnowEffect";

function App() {
  return (
    <>
      <Container>
        <View />
      </Container>
      <SnowEffect />
    </>
  );
}

export default App;

const Container = styled(Box)`
  width: 100%;
  margin: auto;
  max-width: 500px;
  background-color: #fbfbfb;
`;
