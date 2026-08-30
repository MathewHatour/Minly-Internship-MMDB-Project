import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Homepage placeholder</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
