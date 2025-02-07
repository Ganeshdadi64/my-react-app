import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faAndroid } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="try-whitepace">
      <div className="hero">
        <h1>Try Whitepace today</h1>
        <p>Get started for free. Add your whole team as your needs grow.</p>
        
        <button className="hero-button">Try Taskey Free →</button>
        <p className="team-text">On a big team? Contact sales</p>

       
        <div className="platform-icons">
          <FontAwesomeIcon icon={faApple} className="icon" />
          <FontAwesomeIcon icon={faWindows} className="icon" />
          <FontAwesomeIcon icon={faAndroid} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
