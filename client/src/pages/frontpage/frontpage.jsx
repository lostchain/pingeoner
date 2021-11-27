import react from "react";
import "./frontpage.css";

const Home = () => {
    return (
      <div className="container">
        <div className="imageSide">
          <img src="https://cdn.discordapp.com/attachments/718549318860013612/914147216816472084/Paloma_bravia_Columba_livia_Palacio_de_Nymphenburg_Munich_Alemania01.png" alt="Kahoot"/>
        </div>
        <div className="contentSide">
          <div className="heading">
            <h1>Pigeoner</h1>
            <img id="pingeon" src="https://cdn.discordapp.com/attachments/718549318860013612/914143868734287902/pigeonOrange.png" alt="Pingeon Kahoot"/>
          </div>
          <p>Welcome to the bikkin side</p>
          <div className="form">
            <button className="btn slide">Login</button>
            <button className="btn slide">Register</button>
          </div>
          
        </div>
      </div>
    );
}

export default Home;