import "./Home.css";
import Login from "../../components/Login/Login";
import { useState } from "react";
import Register from "../../components/Register/Register";

const Home = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showReg, setShowReg] = useState(false);

    return (
      <>
      <div className="container">
        <div className="imageSide">
          <img src="https://cdn.discordapp.com/attachments/718549318860013612/914147216816472084/Paloma_bravia_Columba_livia_Palacio_de_Nymphenburg_Munich_Alemania01.png" alt="Kahoot"/>
        </div>
        <div className="contentSide">
          <div className="heading">
            <h1 className="nameHeader">Pigeoner</h1>
            <img id="pingeon" src="https://cdn.discordapp.com/attachments/718549318860013612/914143868734287902/pigeonOrange.png" alt="Pingeon Kahoot"/>
          </div>
          <p className="pageDesc">Welcome to the bikkin side</p>
          <div className="form">
            <button className="btn slide" onClick={() => setShowLogin(true)}>Login</button>
            <button className="btn slide" onClick={() => setShowReg(true)}>Register</button>
          </div>
          
        </div>
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      {showReg && <Register setShowReg={setShowReg}/>}
      </div>
      </>
    );
}

export default Home;