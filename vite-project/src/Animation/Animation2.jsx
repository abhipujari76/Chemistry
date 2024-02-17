import React from 'react';
import YouTube from 'react-youtube';
import './Animation.css';
import { Link } from 'react-router-dom';
import video6 from './video6.mp4';
//Synthesis of aspirin 
const Animation = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    const videoIds = ['Y4NMpO1xI8U', '_ZWzcnUbsNY', 'IdYhY_dlrEE', 'frbqidkMNqI', 'XqfKx63mZCQ', 'kV5cQrxVeBY'];
   
    const description = "Explore chemistry experiments and learn key concepts in an easy-to-understand way! These videos cover various topics, from mixing chemicals to observing reactions. Whether you're a student or a chemistry enthusiast, you'll find these tutorials helpful and engaging.";

    // Divide videoIds into chunks of 3
    const videoChunks = Array(Math.ceil(videoIds.length / 3)).fill().map((_, index) => videoIds.slice(index * 3, (index + 1) * 3));

    return (
        <div className="Animation-container">
             <video autoPlay loop muted className="video-background">
        <source src={video6} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
            <h1 className="page-title">Discover Chemistry Experiments</h1>
            <p className="page-description">{description}</p>
            {videoChunks.map((chunk, index) => (
                <div key={index} className="video-row">
                    {chunk.map((videoId, idx) => (
                        <div key={videoId} className="video-container">
                            <YouTube videoId={videoId} opts={opts} />
                        </div>
                    ))}
                </div>
            ))}
            <Link to="/Procedure2"><button className="back-button2">Back to Procedure</button></Link>
      <Link to="/Experiment"><button className="procedure-button2">Experiment</button></Link>  
        </div>
        </div>
    );
}

export default Animation;
