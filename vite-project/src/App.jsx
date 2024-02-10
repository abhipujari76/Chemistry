import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
    const heroData = [
        { text1: "Dive into", text2: "what you love" },
        { text1: "Indulge", text2: "your passions" },
        { text1: "Give in to", text2: "your passions" }
    ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount(count => (count === 2 ? 0 : count + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>

            <div>
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Navbar />
                <Hero
                    setPlayStatus={setPlayStatus}
                    heroData={heroData[heroCount]}
                    heroCount={heroCount}
                    setHeroCount={setHeroCount}
                    playStatus={playStatus}
                />
            </div>
        </BrowserRouter>
    );
};

export default App;
