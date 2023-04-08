import React, { useState } from 'react';
import Tagline from './components/Tagline/Tagline';
import noise from "./assets/noise.svg"
import Navbar from './components/Navbar/Navbar';
import HomeSection from './components/HomeSection';
import WhyAnytimeSection from './components/WhyAnytimeSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ShowcaseSection from './components/ShowcaseSection';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);

  const handleScroll = () => {
    const yPos = window.pageYOffset;
    if (yPos > 0) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

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
      <Navbar showTitle={showTitle} />
      <Tagline showTitle={showTitle} />
      <HomeSection />
      <WhyAnytimeSection />
      <WhoWeAreSection />
      <ShowcaseSection />
    </div>
  );
};

export default Home;
