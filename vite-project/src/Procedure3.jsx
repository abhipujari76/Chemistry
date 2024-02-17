import React from 'react';
import './Procedure.css'; 
import distillationflask from './assets/distillation flask.png';
import Condenser from './assets/Condenser.png';
import Receivingflask from './assets/Receivingflask.png';
import Heatingsource  from './assets/Heatingsource .png';
import distillation from './assets/distillation .png';
import { Link } from 'react-router-dom';
import video4 from './assets/video4.mp4';
import Navdash from './Navdash';

const Procedure3 = () => {
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

<div className="topic">
    <div className="topic-content">
        <h2 className="topic-title">Distillation</h2>
        <img src={distillation} className="material-new" alt="Thermometer" />
        <p className="topic-text">
            Distillation is a widely used technique in chemistry for separating mixtures based on differences in their volatilities. It involves heating a liquid mixture to create vapor and then condensing the vapor back into liquid form to separate the components.
        </p>
        <h3 className="subheading">Materials Required:</h3>
        <div className="materials-list">
            <div className="material">
                <img src={distillationflask} className="material-image" alt="Beaker" />
                <span>Distillation flask</span>
            </div>
            <div className="material">
                <img src={Condenser} className="material-image" alt="Thermometer" />
                <span>Condenser</span>
            </div>
            <div className="material">
                <img src={Receivingflask} className="material-image" alt="Beaker" />
                <span>Receiving flask</span>
            </div>
            <div className="material">
                <img src={Heatingsource } className="material-image" alt="Beaker" />
                <span>Heating source</span>
            </div>
           
        </div>
        <h3 className="subheading">Procedure:</h3>
        <ol className="procedure-steps">
            <li>Set up the distillation apparatus, including a distillation flask, a condenser, a receiving flask, and a heating source.</li>
            <li>Ensure that the distillation flask is properly connected to the condenser and receiving flask.</li>
            <li>Heat the mixture in the distillation flask to its boiling point.</li>
            <li>As the mixture boils, the more volatile components will vaporize first and rise into the condenser.</li>
            <li>The condenser cools the vapor, causing it to condense back into liquid form.</li>
            <li>Collect the condensed liquid in the receiving flask.</li>
            <li>Continue heating until all desired components have been separated and collected.</li>
        </ol>
        <Link to="/Theory3"><button className="back-button">Back to Theory</button></Link>
        <Link to="/Experiment"><button className="home-button">Experiment</button></Link>
        <Link to="/Animation3"><button className="procedure-button">Practical</button></Link>
    </div>
</div>
</div>
</div>
       
        
    );
}

export default Procedure3;
