import styled from "styled-components";
import View from "./page/View";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import SnowEffect from "./components/SnowEffect";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View />
      </Container>
      <SnowEffect />
    </ThemeProvider>
  );
}

export default App;

const Container = styled(Box)`
  width: 100%;
  margin: auto;
  max-width: 500px;
  background-color: #fbfbfb;
`;
