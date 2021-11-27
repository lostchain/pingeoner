import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/frontpage/frontpage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
