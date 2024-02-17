import React from 'react';
import { Link } from 'react-router-dom';
import './Theory1.css'; // Import the CSS file
import video3 from './video3.mp4'; // Import the video file
import Navdash from './Navdash';

const TitrationTheory = () => {
  return (
    <div>
      <Navdash/>
   
      <div className="theory-container">
      <video autoPlay loop muted className="video-background">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h2 className="theory-heading">Theory of Titration</h2>
        <div className="theory-content">
          <p>
            Titration is a fundamental technique in analytical chemistry used to determine the concentration of a substance in a solution. It involves the gradual addition of a known concentration of one solution (the titrant) to another solution containing the analyte (the substance being analyzed) until the reaction between the two is complete. The point at which the reaction is complete is called the equivalence point.
          </p>
          <p>
            Titration is widely used in various fields of chemistry, including pharmaceuticals, environmental analysis, food and beverage industry, and research laboratories. It provides precise and accurate measurements of concentration, making it an essential tool for quantitative chemical analysis.
          </p>
          <p>
            The principle behind titration relies on the stoichiometry of the reaction between the titrant and the analyte. By knowing the balanced chemical equation for the reaction and the volume and concentration of the titrant required to reach the equivalence point, one can calculate the concentration of the analyte.
          </p>
          <p>
            Common types of titrations include acid-base titrations, redox titrations, complexometric titrations, and precipitation titrations. Each type of titration requires specific indicators, which change color at or near the equivalence point, allowing the determination of the endpoint.
          </p>
          <p>
            Titration techniques can vary based on the nature of the analyte and titrant, as well as the desired level of accuracy and precision. Automated titration systems are also available, which offer increased efficiency and reproducibility in analyses.
          </p>
          <p>
            In summary, titration is a versatile and indispensable technique in analytical chemistry, providing valuable information about the concentration of substances in solution and playing a crucial role in various scientific and industrial applications.
          </p>
        </div>
        <div className="buttons-container">
          <Link to="/Experiment"><button className="back-button1">Back to Experiment</button></Link>
          <Link to="/Procedure"><button className="procedure-button1">Procedure</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TitrationTheory;
