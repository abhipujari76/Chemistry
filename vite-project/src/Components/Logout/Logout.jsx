import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('token'); 
            navigate('/login'); 
            window.history.pushState(null, '', '/login'); // Replace the current URL with '/login'
            window.location.reload(); // Reload the page
        }, 2000); 
    }, [navigate]);

    return (
        <div>
             <div className="logout-animation">
          <div className="logout-circle"></div>
          <div className="logout-text">Logging out...</div>
        </div>
        </div>
    );
}

export default Logout;
