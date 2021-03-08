import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      {/* <Routes>
        <Route path="/" element={}/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
