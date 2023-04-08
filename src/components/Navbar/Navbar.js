import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navOpacity, setNavOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = window.scrollY > 0 ? 0.75 : 0;
      setNavOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeButton, setActiveButton] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      const whyAnytimeSection = document.querySelector('#why-anytime');
      const whoWeAreSection = document.querySelector('#who-we-are');
      const showcaseSection = document.querySelector('#showcase');

      const sections = [
        {
          section: homeSection,
          button: 'Home',
        },
        {
          section: whyAnytimeSection,
          button: 'Why Anytime',
        },
        {
          section: whoWeAreSection,
          button: 'Who We Are',
        },
        {
          section: showcaseSection,
          button: 'Showcase',
        },
      ];

      const currentSection = sections.find(({ section }) => {
        const { top, height } = section.getBoundingClientRect();
        return top + height / 2 >= 0 && top - height / 2 <= window.innerHeight;
      });

      if (currentSection) {
        setActiveButton(currentSection.button);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full bg-black bg-opacity-0 transition duration-500 ease-in-out z-50 ${navOpacity > 0 ? 'backdrop-blur' : ''}`}
      style={{ backgroundColor: `rgba(0,0,0,${navOpacity})` }}
    >
      <div className="container mx-auto flex justify-between py-6">
        <div className="text-white">
          <h1 className={`text-4xl ${navOpacity > 0 ? '' : 'hidden'}`}>
            Anytime Software
          </h1>
        </div>
        <div className={`${navOpacity > 0 ? 'text-white' : 'text-black'}`}>
          <ul className="flex space-x-8">
            <li>
              <button
                className={`px-4 py-2 ${
                  activeButton === 'Home' ? `border-b-4 border-purple-500 ${navOpacity > 0 ? 'text-white' : 'text-black'}` : ''
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 ${
                  activeButton === 'Why Anytime' ? `border-b-4 border-purple-500 ${navOpacity > 0 ? 'text-white' : 'text-black'}` : ''
                }`}
              >
                Why Anytime
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 ${
                  activeButton === 'Who We Are' ? `border-b-4 border-purple-500 ${navOpacity > 0 ? 'text-white' : 'text-black'}` : ''
                }`}
              >
                Who We Are
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 ${
                  activeButton === 'Showcase' ? `border-b-4 border-purple-500 ${navOpacity > 0 ? 'text-white' : 'text-black'}` : ''
                }`}
              >
                Showcase
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
