import { Container } from "@mui/material";
import View from "./page/View";
// import { ThemeProvider, createTheme } from "@mui/material";

// const theme = createTheme({
//   typography: {
//     allVariants: {
//       color: "#333",
//     },
//   },
//   palette: {
//     primary: {
//       main: "#2196f3",
//       contrastText: "#fff",
//     },
//     error: {
//       main: "#ef5350",
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Container sx={{ bgcolor: "#FBFBFB", height: "100vh" }}>
      <View />
    </Container>
    // </ThemeProvider>
  );
}

export default App;
