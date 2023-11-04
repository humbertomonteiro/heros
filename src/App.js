import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes";

import Header from "./components/Header";

import HerosProvider from "./context";

import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <HerosProvider>
        <div className="container">
          <Header />
          <RouterApp />
        </div>
      </HerosProvider>
    </BrowserRouter>
  );
}

export default App;
