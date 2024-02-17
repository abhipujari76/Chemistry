import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Background.css'; // Import the CSS file
import video1 from '../../Assets/video1.mp4';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';
import image3 from '../../Assets/image3.png';

const Background = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Define an array of media files (images and videos)
    const mediaFiles = [
        { type: 'image', src: image1 },
        { type: 'image', src: image2 },
        { type: 'image', src: image3 },
        { type: 'video', src: video1 },
    ];

    // State to track the current index of the mediaFiles array
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // Function to increment the media index and cycle through mediaFiles array
    const incrementMediaIndex = () => {
        setCurrentMediaIndex((currentIndex) => (currentIndex + 1) % mediaFiles.length);
    };

    // Effect to cycle through mediaFiles at certain intervals
    useEffect(() => {
        // Define the interval duration in milliseconds
        const intervalDuration = 5000;

        // Set up an interval to switch media files
        const intervalId = setInterval(incrementMediaIndex, intervalDuration);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Determine which media content to display based on conditions
    let backgroundContent;
    if (isHomePage) {
        const currentMedia = mediaFiles[currentMediaIndex];
        if (currentMedia.type === 'video') {
            backgroundContent = (
                <video className='background fade-in' autoPlay loop muted>
                    <source src={currentMedia.src} type='video/mp4' />
                </video>
            );
        } else {
            backgroundContent = <img src={currentMedia.src} className='background fade-in' alt="" />;
        }
    } else {
        backgroundContent = null;
    }

    // Text content for chemistry quote
    const chemistryQuote = "In chemistry, every reaction tells a story.";

    return (
        <div className='background-container'>
            {backgroundContent}
            <div className="overlay"></div>
            <div className="chemistry-quote">
                <p>{chemistryQuote}</p>
            </div>
        </div>
    );
}

export default Background;
