import React from 'react';
import { Link } from 'react-router-dom';
import video3 from './video3.mp4';
import Navdash from './Navdash'

const Theory2 = () => {
  return (
    <div>
      <Navdash/>
    
    <div className="theory-container">
      
      <video autoPlay loop muted className="video-background">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">

      </div>
      <h2 className="theory-heading">Synthesis of Aspirin</h2>
      <p className="theory-paragraph">
        The synthesis of aspirin, also known as acetylsalicylic acid, is a classic experiment in organic chemistry that demonstrates fundamental principles of organic synthesis and stoichiometry. Aspirin is one of the most widely used medications globally, known for its analgesic (pain-relieving), anti-inflammatory, and antipyretic (fever-reducing) properties.
      </p>
      <p className="theory-paragraph">
        The synthesis of aspirin involves the reaction between salicylic acid and acetic anhydride in the presence of a catalyst, typically sulfuric acid. This reaction produces aspirin and acetic acid as byproducts.
      </p>
      <p className="theory-paragraph">
        Salicylic acid, the precursor to aspirin, is naturally found in plants such as willow bark and has been used for centuries for its medicinal properties. However, pure salicylic acid can irritate the stomach lining when ingested. The synthesis of aspirin introduces an acetyl group (-COCH3) to the hydroxyl (-OH) functional group of salicylic acid, producing acetylsalicylic acid, which is less irritating to the stomach.
      </p>
      <p className="theory-paragraph">
        The reaction mechanism involves the nucleophilic addition of the hydroxyl group of salicylic acid to the carbonyl carbon of acetic anhydride, forming an intermediate. This intermediate then undergoes proton transfer and rearrangement to yield aspirin and acetic acid.
      </p>
      <p className="theory-paragraph">
        The purity and yield of the aspirin product can be assessed through techniques such as melting point determination, thin-layer chromatography (TLC), and spectroscopic analysis. Additionally, the stoichiometry of the reaction can be verified through calculations based on the mass of reactants and products.
      </p>
      <p className="theory-paragraph">
        The synthesis of aspirin is not only a practical demonstration of organic chemistry principles but also highlights the importance of drug development and the synthesis of pharmaceuticals. It serves as a foundational experiment in undergraduate chemistry education, providing students with hands-on experience in laboratory techniques, reaction mechanisms, and chemical analysis.
      </p>
      <div className="buttons-container">
      <Link to="/Experiment" className="back-button1">Back to Experiment</Link>
      <Link to="/Procedure2"><button className="procedure-button1">Procedure</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Theory2;
