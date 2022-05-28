import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MovProvider } from "./contexts/MovieContext";
import MyRoute from "./Routes/Router";

function App() {
  return (
    <MovProvider>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </MovProvider>
  );
}

export default App;
