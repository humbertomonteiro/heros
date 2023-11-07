import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes";

import Header from "./components/Header";

import HerosProvider from "./context";

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
