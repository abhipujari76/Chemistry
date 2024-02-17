import React from 'react';
import { Link } from 'react-router-dom';
import './Experiment.css'; // Import the CSS file
import icon1 from './assets/icon1.png'; // Import the image for Titration
import icon2 from './assets/icon2.png'; // Import the image for Synthesis of Aspirin
import icon3 from './assets/icon3.png'; // Import the image for Distillation
import video2 from './assets/video2.mp4'; // Import the background video
import Navdash from './Navdash'

const Experiment = () => {
  return (
    <div>
      <Navdash/>
    
    <div className="experiment-container">
      <video autoPlay loop muted className="experiment-video">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="experiment-content">
        <h2>Chemistry Experiment </h2>
        <div className="experiment-list">
          <div className="experiment-item">
            <div className="experiment-content">
              <img src={icon1} alt="Titration" className="experiment-image" />
              <Link to="/Theory1"><button className="experiment-button">Titration</button></Link>
            </div>
          </div>
          <div className="experiment-item">
            <div className="experiment-content">
              <img src={icon2} alt="Synthesis of Aspirin" className="experiment-image" />
              <Link to="/Theory2"><button className="experiment-button">Synthesis of Aspirin</button></Link>
            </div>
          </div>
          <div className="experiment-item">
            <div className="experiment-content">
              <img src={icon3} alt="Distillation" className="experiment-image" />
              <Link to="/Theory3"><button className="experiment-button">Distillation</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experiment;
