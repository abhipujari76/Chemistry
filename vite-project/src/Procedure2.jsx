// ChemistryProcedure.jsx

import React from 'react';
import './Procedure.css';
import beaker from './assets/beaker.png';
import thermometer from './assets/thermometer.png';
import { Link } from 'react-router-dom';
import video4 from './assets/video4.mp4';
import Navdash from './Navdash';
const Procedure2 = () => {
    return (
        <div>
            <Navdash/>
       
    
        <div className="Procedure-container">
                  <video autoPlay loop muted className="procedure-video1">
    <source src={video4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
            <h1 className="procedure-title">Chemistry Procedures</h1>
            <p className="procedure-text">Explore various chemical experiments and procedures.</p>
       
            {/* Procedure 2: Synthesis of Aspirin */}
            <div className="topic">
                <div className="topic-content">
                    <h2 className="topic-title">Synthesis of Aspirin</h2>
                    <p className="topic-text">
                        Synthesis of aspirin is a classic organic chemistry experiment that is used to illustrate principles of organic synthesis and stoichiometry. It involves the reaction of salicylic acid with acetic anhydride in the presence of a catalyst to produce aspirin and acetic acid as byproducts.
                    </p>
                    <h3 className="subheading">Materials Required:</h3>
                    <div className="materials-list">
                        <div className="material">
                            <img src={beaker} className="material-image" alt="Beaker" />
                            <span>Beaker</span>
                        </div>
                        <div className="material">
                            <img src={thermometer} className="material-image" alt="Thermometer" />
                            <span>Thermometer</span>
                        </div>
                      
                    </div>
                    <h3 className="subheading">Procedure:</h3>
                    <ol className="procedure-steps">
                        <li>Dissolve salicylic acid in ethanol and add a small amount of sulfuric acid as a catalyst.</li>
                        <li>Slowly add acetic anhydride to the solution while stirring continuously.</li>
                        <li>Heat the mixture to reflux for a specified period.</li>
                        <li>Cool the reaction mixture and add water to hydrolyze excess acetic anhydride.</li>
                        <li>Filter the precipitated aspirin and wash it with cold water.</li>
                        <li>Dry the aspirin crystals and calculate the yield.</li>
                    </ol>
                    <Link to="/Theory2"><button className="back-button">Back to Theory</button></Link>
                    <Link to="/Experiment"><button className="home-button">Experiment</button></Link>
                    <Link to="/Animation2"><button className="procedure-button">Practical</button></Link>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Procedure2;
