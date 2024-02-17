import React from 'react';
import './Procedure.css'; 
import testtube from './assets/testtube.png'; 
import pipette from './assets/pipette.png';
import beaker from './assets/beaker.png';
import thermometer from './assets/thermometer.png';
import { Link } from 'react-router-dom';
import video4 from './assets/video4.mp4'; // Import the background video
import Navdash from './Navdash';
const Procedure = () => {
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
            
            {/* Procedure 1: Titration */}
            <div className="topic">
                <div className="topic-content">
                    <h2 className="topic-title">Titration</h2>
                    <p className="topic-text">
                        Titration is a common laboratory method of quantitative chemical analysis that is used to determine the concentration of an identified analyte. It involves the gradual addition of a solution of known concentration (the titrant) to a solution of unknown concentration (the analyte) until the reaction between the two is complete.
                    </p>
                    <h3 className="subheading">Materials Required:</h3>
                    <div className="materials-list">
                        <div className="material">
                            <img src={testtube} className="material-image" alt="Test Tube" />
                            <span>Test Tube</span>
                        </div>
                        <div className="material">
                            <img src={pipette} className="material-image" alt="Pipette" />
                            <span>Pipette</span>
                        </div>
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
                        <li>Prepare the solution of known concentration (titrant) and the solution of unknown concentration (analyte).</li>
                        <li>Place the analyte solution in a suitable container and add a few drops of an appropriate indicator.</li>
                        <li>Fill the burette with the titrant solution and record the initial volume.</li>
                        <li>Titrate the analyte solution by gradually adding the titrant solution while stirring or swirling the container.</li>
                        <li>Repeat the titration process until consistent results are obtained.</li>
                        <li>Calculate the concentration of the analyte solution based on the volume of titrant used.</li>
                    </ol>
                    <Link to="/Theory1"><button className="back-button">Back to Theory</button></Link>
                    <Link to="/Experiment"><button className="home-button">Experiment</button></Link>
                    <Link to="/Animation"><button className="procedure-button">Practical</button></Link>
                </div>
            </div>
            </div>
       </div>
      
    );
}

export default Procedure;
