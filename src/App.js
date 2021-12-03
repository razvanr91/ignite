import React from "react";
// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="game/:id" element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
