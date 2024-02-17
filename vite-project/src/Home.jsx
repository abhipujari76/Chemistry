import React from 'react';
import Navdash from './Navdash'
import periodic from './assets/periodic.png'
import './Home.css'


const  Home = () => {
    return (
        <div>
            <Navdash />
            <div className="centered-container">
            <img src={periodic} alt="Centered" className="centered-image" />
    
    </div>

        </div>

    );
}

export default Home;
