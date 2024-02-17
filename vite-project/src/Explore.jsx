import React from 'react';
import './Components/NavHome/Explore.css'; 
import { FaAtom, FaFlask, FaRegSnowflake, FaMicroscope, FaBookOpen, FaBurn } from 'react-icons/fa'; // Import icons
import video4 from './assets/video4.mp4';
import Navdash from './Navdash';

const Explore = () => {
  return (
    <div>
      <Navdash/>
    <div className="explore-container">
      <video autoPlay loop muted className="video-background">
        <source src={video4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
      <h1 className="explore-title">Discover Chemistry</h1>
      <p className="explore-text">
        Dive into the fascinating world of chemistry and uncover its wonders.
      </p>
      <div className="topics">
        <div className="topic">
          <div className="icon-container">
            <FaAtom className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">Atomic Structure</h2>
            <p className="topic-text">
              Atomic structure refers to the arrangement of subatomic particles within an atom. Protons and neutrons reside in the nucleus, while electrons orbit the nucleus in specific energy levels or shells. Understanding atomic structure is crucial for comprehending various chemical phenomena.
            </p>
          </div>
        </div>
        <div className="topic">
          <div className="icon-container">
            <FaFlask className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">Chemical Reactions</h2>
            <p className="topic-text">
              Chemical reactions involve the breaking and formation of chemical bonds between atoms. Reactants undergo transformation to yield products with distinct properties. Studying chemical reactions enables scientists to develop new materials, medicines, and technologies.
            </p>
          </div>
        </div>
        <div className="topic">
          <div className="icon-container">
            <FaRegSnowflake className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">States of Matter</h2>
            <p className="topic-text">
              Matter exists in various states: solid, liquid, gas, and plasma. Each state exhibits unique physical properties and undergoes phase transitions under different conditions. Exploring states of matter elucidates fundamental principles governing the behavior of substances.
            </p>
          </div>
        </div>
        <div className="topic">
          <div className="icon-container">
            <FaMicroscope className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">Chemical Analysis</h2>
            <p className="topic-text">
              Chemical analysis involves the techniques used to identify and quantify the chemical components of a substance. From spectroscopy to chromatography, these methods provide invaluable insights into the composition and properties of materials.
            </p>
          </div>
        </div>
        <div className="topic">
          <div className="icon-container">
            <FaBookOpen className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">Chemical Education</h2>
            <p className="topic-text">
              Chemical education encompasses the teaching and learning of chemistry at various levels, from elementary school to university. It aims to foster an understanding of chemical concepts and their applications in the world around us.
            </p>
          </div>
        </div>
        <div className="topic">
          <div className="icon-container">
            <FaBurn className="topic-icon" />
          </div>
          <div className="topic-content">
            <h2 className="topic-title">Thermodynamics</h2>
            <p className="topic-text">
              Thermodynamics deals with the study of energy and its transformations in chemical systems. Concepts such as enthalpy, entropy, and Gibbs free energy govern the spontaneity and direction of chemical reactions.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Explore;
