import React, { useState } from 'react';
import Tagline from './components/Tagline/Tagline';
import noise from "./assets/noise.svg"

const Home = () => {

  return (
    <div className="text-gray-900">
      <div
        className="overlay"
      >
        <img
        className="noise"
          src={noise}
          alt="noise overlay"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
      </div>
        <Tagline />
    </div>
  );
};

export default Home;
