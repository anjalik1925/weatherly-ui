import React from 'react';
import './SplashScreen.scss';

const SplashScreen = ({ onStart }) => {
  return (
    <div className="splash-screen">
      <img src="/images/6.avif" alt="" />
       
     
      <div className="logo">⛅</div>
      <h1 className="title">Welcome to <span>Weatherly</span></h1>
      <p className="subtitle">Your pocket guide to sunshine, clouds & everything in between 🌈</p>
      <button className="start-btn" onClick={onStart}>☀️ Let’s Begin</button>
    </div>
  );
};

export default SplashScreen;


