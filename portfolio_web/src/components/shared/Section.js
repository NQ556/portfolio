import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: var(--spacing-xl) 0;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.background || 'var(--color-background)'};
`;

const SectionInner = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 3px;
    width: 60px;
    background-color: var(--color-accent);
  }
`;

const Section = ({ 
  id, 
  title, 
  background, 
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 }
}) => {
  return (
    <SectionContainer 
      id={id} 
      background={background}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      <SectionInner>
        {title && (
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </SectionTitle>
        )}
        {children}
      </SectionInner>
    </SectionContainer>
  );
};

export default Section; 