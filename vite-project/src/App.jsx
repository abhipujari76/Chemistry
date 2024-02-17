import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Navbar from "./Components/Navbar/Navbar";
import Logout from "./Components/Logout/Logout";
import Explore from "./Explore";
import Background from "./Components/Background/Background";
import Experiment from "./Experiment";
import TitrationTheory from "./Theory1";
import Theory2 from "./Theory2";
import Theory3 from "./Theory3";
import Procedure from "./Procedure";
import Procedure2 from "./Procedure2";
import Procedure3 from "./Procedure3";
import Animation from "./Animation/Animation";
import Animation2 from "./Animation/Animation2";
import Animation3 from "./Animation/Animation3";
import Equation from "./Equation";

import { MaybeshowNavbar } from "./Components/MaybeshowNavbar/MaybeshowNavbar";
const App = () => {
    return (
        <BrowserRouter>
            <Background/>
            
            <MaybeshowNavbar>
                <Navbar/>
            </MaybeshowNavbar>
           

            <Routes>
                <Route path='/register' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/logout' element={<Logout />} /> 
                <Route path='/explore' element={<Explore />} /> 
                <Route path='/Experiment' element={<Experiment />} />
                    <Route path='/Procedure' element={<Procedure />} />
                    <Route path='/Procedure2' element={<Procedure2 />} />
                    <Route path='/Procedure3' element={<Procedure3 />} />
                    <Route path='/Theory1' element={<TitrationTheory />} />
                    <Route path='/Theory2' element={<Theory2 />} />
                    <Route path='/Theory3' element={<Theory3 />} />
                    <Route path='/Animation' element={<Animation />} />
                    <Route path='/Animation2' element={<Animation2 />} />
                    <Route path='/Animation3' element={<Animation3 />} />
                    <Route path='/Equation' element={<Equation />} />
                
            </Routes>
            
            
        </BrowserRouter>
    );
};

export default App;
