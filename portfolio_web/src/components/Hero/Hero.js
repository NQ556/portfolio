import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Shapes from '../decorative/Shapes';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 var(--container-padding);
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  z-index: 1;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--color-accent);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      height: 8px;
      background-color: var(--color-accent);
      opacity: 0.3;
      z-index: -1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    
    span:after {
      height: 5px;
      bottom: 3px;
    }
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 700px;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-text-light);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--color-accent);
    border-bottom: 2px solid var(--color-accent);
    transform: rotate(45deg);
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Shapes type="hero" />
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Designing <span>intuitive</span> experiences
        </HeroTitle>
        
        <HeroTagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          That speak louder than pixels. Creating meaningful digital experiences through human-centered design.
        </HeroTagline>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.p
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Scroll
        </motion.p>
        <motion.div 
          className="arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 