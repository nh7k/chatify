import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="devil-loading-screen">
      <div className="fire-background"></div>

      <div className="loader-wrapper">
        <div className="hell-circle">
          <div className="fire-ring"></div>
          <div className="inner-flame">
        
          </div>
        </div>
        <h1 className="devil-text">WELCOME TO CHAT...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
