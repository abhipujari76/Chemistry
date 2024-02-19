
import React, { useState } from 'react';
import './Equation.css'; // Import the CSS file
import video4 from './assets/video4.mp4';
import Navdash from './Navdash';
import YouTube from 'react-youtube'; // Import the YouTube component
const Equation = () => {
const [reactants, setReactants] = useState(['', '', '']);
const [product, setProduct] = useState('');
const [answer, setAnswer] = useState('');
const [isThreeReactants, setIsThreeReactants] = useState(false); // Toggle state for reactants
const [selectedFormula, setSelectedFormula] = useState(null); // State to track the selected formula
// Predefined chemical formulas with explanations and video IDs
const formulas = [
{
reactants: ['H2', 'O2'],
product: 'H2O',
name: 'Combustion of Hydrogen',
explanation: 'The reaction between hydrogen gas (H2) and oxygen gas (O2) to form water vapor (H2O). This is a common combustion reaction.',
videoId: 'iAkx6-PufDA' // Replace VIDEO_ID_1 with the actual YouTube video ID
},
{
reactants: ['C6H12O6', 'O2'],
product: '6CO2 + 6H2O',
name: 'Cellular Respiration',
explanation: 'The process by which cells break down glucose (C6H12O6) and oxygen (O2) to produce carbon dioxide (CO2), water (H2O), and energy.',
videoId: 'JagPP3MX5ks' // Replace VIDEO_ID_2 with the actual YouTube video ID
},
{
reactants: ['SO2', 'O2', 'H2O'],
product: 'H2SO4',
name: 'Formation of Sulfuric Acid',
explanation: 'The reaction between sulfur dioxide gas (SO2), oxygen gas (O2), and water vapor (H2O) to form sulfuric acid (H2SO4), a strong mineral acid used in various industrial processes.',
videoId: 'SSp2UCM4aAU' // Replace VIDEO_ID_4 with the actual YouTube video ID
},
{
reactants: ['C2H5OH', 'O2'],
product: '2CO2 + 3H2O',
name: 'Combustion of Ethanol',
explanation: 'The combustion of ethanol (C2H5OH) with oxygen gas (O2) to produce carbon dioxide (CO2) and water vapor (H2O). Ethanol is commonly used as a biofuel.',
videoId: 'NzNlZZ1fKyM' // Replace VIDEO_ID_5 with the actual YouTube video ID
},
{
reactants: ['H2', 'Cl2'],
product: '2HCl',
name: 'Combination of Hydrogen and Chlorine',
explanation: 'The reaction between hydrogen gas (H2) and chlorine gas (Cl2) to form hydrogen chloride gas (HCl). This is an example of a synthesis reaction.',
videoId: 'NN82GoBG98s' // Replace VIDEO_ID_6 with the actual YouTube video ID
},
{
reactants: ['NH3', 'HNO3'],
product: 'NH4NO3',
name: 'Formation of Ammonium Nitrate',
explanation: 'The reaction between ammonia (NH3) and nitric acid (HNO3) to form ammonium nitrate (NH4NO3), a common fertilizer with high nitrogen content.',
videoId: 'DntcnAa1pC8' // Replace VIDEO_ID_7 with the actual YouTube video ID
},
{
reactants: ['C3H8', '5O2'],
product: '3CO2 + 4H2O',
name: 'Combustion of Propane',
explanation: 'The combustion of propane (C3H8) with oxygen gas (O2) to produce carbon dioxide (CO2) and water vapor (H2O). Propane is commonly used as a fuel for heating and cooking.',
videoId: 'sM_0yQMoeXQ' // Replace VIDEO_ID_8 with the actual YouTube video ID
}
];
// Function to handle reactant input change
const handleReactantChange = (event, index) => {
const value = event.target.value;
const updatedReactants = [...reactants];
updatedReactants[index] = value;
setReactants(updatedReactants);
// Calculate product based on reactants
let newProduct = '';
const reactantsToCheck = updatedReactants.slice(0, isThreeReactants ? 3 : 2);
const matchedFormula = formulas.find(formula =>
arraysEqual(formula.reactants, reactantsToCheck)
);
if (matchedFormula) {
newProduct = matchedFormula.product;
}
setProduct(newProduct);
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
const reactantsToCheck = reactants.slice(0, isThreeReactants ? 3 : 2);
// Check if the input equation matches any predefined formula
const matchedFormula = formulas.find(formula =>
arraysEqual(formula.reactants, reactantsToCheck) && formula.product === product
);
if (matchedFormula) {
const { name, explanation, videoId } = matchedFormula; // Destructure name, explanation, and videoId from matched formula
setSelectedFormula(matchedFormula); // Set the selected formula
setAnswer(`${reactantsToCheck.join(' + ')} = ${product}: ${name}: ${explanation}`); // Display the full formula with name and explanation
} else {
setAnswer(`${reactantsToCheck.join(' + ')} = ${product}`); // Display the full formula when no matching formula is found
setSelectedFormula(null); // Reset selected formula
}
};
// Function to toggle between 2-reactant and 3-reactant equations
const toggleReactants = () => {
setIsThreeReactants(prevState => !prevState);
// Reset reactants and product when toggling
setReactants(['', '', '']);
setProduct('');
setSelectedFormula(null); // Reset selected formula
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
{index < (isThreeReactants ? 2 : 1) && <div className="plus-sign">+</div>}
</div>
))}
{/* Equal Sign */}
<div className="equal-sign">=</div>
{/* Product */}
<div className="equation-box">
<input
type="text"
placeholder="Product"
value={product}
onChange={handleProductChange}
/>
</div>
{/* Toggle button */}
<button className="toggle-button" onClick={toggleReactants}>
{isThreeReactants ? "Switch to 2 Reactants" : "Switch to 3 Reactants"}
</button>
<button className="calculate-button" onClick={calculateAnswer}>Practical</button>
<div className="answer-box">
<label>Explanation:</label>
<div>{answer}</div>
<div className="answer-box">
{/* Display YouTube video if a formula is selected */}
{selectedFormula && (
<div className="video-container5">
<YouTube videoId={selectedFormula.videoId} />
</div>
)}
</div>
</div>
</div>
</div>
);
};
export default Equation;