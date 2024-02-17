import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const MaybeshowNavbar = ({ children }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true); // Assuming Navbar should initially be shown

    useEffect(() => {
        console.log('this is location', location);
        if (location.pathname === '/home') {
            setShowNavbar(false);
        } else if (location.pathname === '/home') {
            setShowNavbar(false);
        }  else if (location.pathname === '/explore') {
            setShowNavbar(false);
        }else if (location.pathname === '/Experiment') {
            setShowNavbar(false);
        }else if (location.pathname === '/Procedure') {
            setShowNavbar(false);
        }else if (location.pathname === '/Procedure2') {
            setShowNavbar(false);
        }else if (location.pathname === '/Procedure3') {
            setShowNavbar(false);
        }else if (location.pathname === '/Theory1') {
            setShowNavbar(false);
        }else if (location.pathname === '/Theory2') {
            setShowNavbar(false);
        }else if (location.pathname === '/Theory3') {
            setShowNavbar(false);
        }else if (location.pathname === '/Animation') {
            setShowNavbar(false);
        }else if (location.pathname === '/Animation2') {
            setShowNavbar(false);
        }else if (location.pathname === '/Animation3') {
            setShowNavbar(false);
        }else if (location.pathname === '/Equation') {
            setShowNavbar(false);
        }
        else {
            setShowNavbar(true);
        }
    }, [location]);

    return (
        <div>{showNavbar && children}</div>
    );
};

export { MaybeshowNavbar }; // Exporting MaybeshowNavbar component
