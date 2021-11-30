import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";

import CreateUser from "./components/Register/Register";

const App = () => {
  return (
      <>
      
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/user" component={CreateUser}/>
      </Routes>
      </>
  );
}

export default App;
