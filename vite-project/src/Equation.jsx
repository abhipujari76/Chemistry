import React, { useState } from 'react';
import './Equation.css'; // Import the CSS file
import video4 from './assets/video4.mp4'; 
import Navdash from './Navdash';

const Equation = () => {
  const [reactants, setReactants] = useState(['', '', '']);
  const [product, setProduct] = useState('');
  const [answer, setAnswer] = useState('');
  const [isThreeReactants, setIsThreeReactants] = useState(false); // Toggle state for reactants

  // Predefined chemical formulas with explanations
  const formulas = [
    { 
      reactants: ['H2', 'O2'], 
      product: 'H2O', 
      name: 'Combustion of Hydrogen', 
      explanation: 'The reaction between hydrogen gas (H2) and oxygen gas (O2) to form water vapor (H2O). This is a common combustion reaction.' 
    },
    { 
      reactants: ['C6H12O6', 'O2'], 
      product: '6CO2 + 6H2O', 
      name: 'Cellular Respiration', 
      explanation: 'The process by which cells break down glucose (C6H12O6) and oxygen (O2) to produce carbon dioxide (CO2), water (H2O), and energy.' 
    },
    { 
      reactants: ['2H2', 'O2'], 
      product: '2H2O', 
      name: 'Combustion of Hydrogen', 
      explanation: 'Similar to the first equation, this represents the combustion of hydrogen gas (H2) with oxygen gas (O2) to produce water vapor (H2O).' 
    },
    { 
      reactants: ['SO2', 'O2', 'H2O'], 
      product: 'H2SO4', 
      name: 'Formation of Sulfuric Acid', 
      explanation: 'The reaction between sulfur dioxide gas (SO2), oxygen gas (O2), and water vapor (H2O) to form sulfuric acid (H2SO4), a strong mineral acid used in various industrial processes.' 
    },
    { 
      reactants: ['C2H5OH', 'O2'], 
      product: '2CO2 + 3H2O', 
      name: 'Combustion of Ethanol', 
      explanation: 'The combustion of ethanol (C2H5OH) with oxygen gas (O2) to produce carbon dioxide (CO2) and water vapor (H2O). Ethanol is commonly used as a biofuel.' 
    },
    { 
      reactants: ['H2', 'Cl2'], 
      product: '2HCl', 
      name: 'Combination of Hydrogen and Chlorine', 
      explanation: 'The reaction between hydrogen gas (H2) and chlorine gas (Cl2) to form hydrogen chloride gas (HCl). This is an example of a synthesis reaction.' 
    },
    { 
      reactants: ['NH3', 'HNO3'], 
      product: 'NH4NO3', 
      name: 'Formation of Ammonium Nitrate', 
      explanation: 'The reaction between ammonia (NH3) and nitric acid (HNO3) to form ammonium nitrate (NH4NO3), a common fertilizer with high nitrogen content.' 
    },
    { 
      reactants: ['C3H8', '5O2'], 
      product: '3CO2 + 4H2O', 
      name: 'Combustion of Propane', 
      explanation: 'The combustion of propane (C3H8) with oxygen gas (O2) to produce carbon dioxide (CO2) and water vapor (H2O). Propane is commonly used as a fuel for heating and cooking.' 
    }
  ];

  // Function to handle reactant input change
  const handleReactantChange = (event, index) => {
    const value = event.target.value;
    const updatedReactants = [...reactants];
    updatedReactants[index] = value;
    setReactants(updatedReactants);
  };

  // Function to handle product input change
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  // Function to check if two arrays are equal
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  // Function to combine equations and calculate answer
  const calculateAnswer = () => {
    // Get the reactants based on the toggle state
    const reactantsToCheck = isThreeReactants ? reactants.slice(0, 3) : reactants.slice(0, 2);
    // Check if the input equation matches any predefined formula
    const matchedFormula = formulas.find(formula =>
      arraysEqual(formula.reactants, reactantsToCheck) && formula.product === product
    );
    if (matchedFormula) {
      setAnswer(`${matchedFormula.name}: ${matchedFormula.explanation}`); // Set name and explanation
    } else {
      setAnswer("No matching formula found");
    }
  };

  // Function to toggle between 2-reactant and 3-reactant equations
  const toggleReactants = () => {
    setIsThreeReactants(prevState => !prevState);
    // Reset reactants and product when toggling
    setReactants(['', '', '']);
    setProduct('');
  };

  return (
    <div>
        <Navdash/>
    
    <div className="equation-container">
      {/* Reactants */}
      <video autoPlay loop muted className="video-background1">
        <source src={video4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {reactants.slice(0, isThreeReactants ? 3 : 2).map((reactant, index) => (
        <div key={index} className="equation-box">
          <input
            type="text"
            placeholder={`Enter Reactant ${index + 1}`}
            value={reactant || ''}
            onChange={(event) => handleReactantChange(event, index)}
          />
        </div>
      ))}
      <div className="plus-sign">+</div>
      {/* Product */}
      <div className="equation-box">
        <input
          type="text"
          placeholder="Enter Product"
          value={product}
          onChange={handleProductChange}
        />
      </div>
      {/* Toggle button */}
      <button className="toggle-button" onClick={toggleReactants}>
        {isThreeReactants ? "Switch to 2 Reactants" : "Switch to 3 Reactants"}
      </button>
      <button className="calculate-button" onClick={calculateAnswer}>Calculate</button>
      <div className="answer-box">
        <label>Explanation:</label>
        <div>{answer}</div>
      </div>
    </div>
    </div>
  );
};

export default Equation;