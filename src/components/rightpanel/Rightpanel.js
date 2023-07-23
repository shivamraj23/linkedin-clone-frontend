import React from "react";
import RightNews from "./RightNews";
import "./Rightpanel.css";

const Rightpanel = () => {
  return (
    <div className="rightpanel-container">
      <p>Batman Headlines</p>
      <ul className="news-list">
        <li>
          <RightNews
            heading="Batman Foils Bank Heist, Apprehends Notorious Gang"
            description="In a daring display of his crime-fighting prowess, Batman thwarted a high-stakes bank heist orchestrated by a notorious gang. Employing his masterful combat skills and cutting-edge technology, the Dark Knight swiftly neutralized the threat, ensuring the safety of bank employees and customers."
          ></RightNews>
        </li>
        <li>
          <RightNews
            heading="Gotham City Honors Batman with Key to the City"
            description="In a heartfelt ceremony, Gotham City officials awarded Batman with the prestigious Key to the City. Recognizing his unwavering dedication to protecting the innocent and preserving justice, the honor symbolizes the city's gratitude for the Dark Knight's selfless acts. Batman expressed gratitude and reaffirmed his commitment to serving and safeguarding Gotham."
          ></RightNews>
        </li>
        <li>
          <RightNews
            heading="Batman Launches Initiative to Tackle Youth Crime"
            description="In a bid to address youth crime and offer a path towards rehabilitation, Batman has launched a groundbreaking initiative. Collaborating with local organizations, the program provides mentorship, educational opportunities, and vocational training to at-risk youth. Batman aims to break the cycle of criminality and empower young individuals to shape a brighter future."
          ></RightNews>
        </li>
        
      </ul>
    </div>
  );
};

export default Rightpanel;
