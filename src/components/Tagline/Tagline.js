import React, { useState, useEffect, useRef } from 'react';
import styles from './Tagline.module.css';
import costImg from "../../assets/images/cost.jpeg";
import reliabilityImg from "../../assets/images/reliability.jpeg";
import performanceImg from "../../assets/images/performance.jpeg";
import securityImg from "../../assets/images/security.jpeg";
import scalabilityImg from "../../assets/images/scalability.jpeg";

const taglines = [
  {
    word: 'Reliability',
    description: 'Emphasize your company\'s commitment to providing reliable and dependable software solutions.',
    background: reliabilityImg,
  },
  {
    word: 'Performance',
    description: 'Emphasize your company\'s dedication to providing high-performing software solutions.',
    background: performanceImg,
  },
  {
    word: 'Security',
    description: 'Focus on your commitment to maintaining the highest level of security in your software solutions.',
    background: securityImg,
  },
  {
    word: 'Cost',
    description: 'Showcase your commitment to providing cost-effective solutions without compromising on quality.',
    background: costImg,
  },
  {
    word: 'Scalability',
    description: 'Highlight your commitment to providing scalable solutions that grow with your clients\' needs.',
    background: scalabilityImg,
  },
];


const Tagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordRef = useRef(null);
  const descriptionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      wordRef.current.style.opacity = 0;
      wordRef.current.style.top = '-1em';
      descriptionRef.current.style.opacity = 0;
      descriptionRef.current.style.left = '100vw';
      backgroundRef.current.style.opacity = 0;
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        wordRef.current.style.top = '0';
        wordRef.current.style.opacity = 1;
        descriptionRef.current.style.left = '0';
        descriptionRef.current.style.opacity = 1;
        backgroundRef.current.style.opacity = 0.3;
      }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.taglineContainer}>
      <img
        ref={backgroundRef}
        src={taglines[currentIndex].background}
        alt="background"
        className={styles.backgroundImage}
      />
      <h1 className={styles.title}>
        Anytime <span className={styles.word} ref={wordRef}>{taglines[currentIndex].word}</span> Matters
      </h1>
      <p className={styles.description} ref={descriptionRef}>{taglines[currentIndex].description}</p>
    </div>
  );
};

export default Tagline;