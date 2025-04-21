import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StepCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    .details-list {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-light);
  opacity: 0.5;
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  font-size: 2rem;
`;

const StepTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
`;

const DetailsList = styled(motion.ul)`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--color-light-gray);
  padding-top: var(--spacing-md);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const DetailItem = styled.li`
  font-size: 0.9rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: var(--color-accent);
    margin-right: 8px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProcessStep = ({ step, index }) => {
  return (
    <StepCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -10 }}
    >
      <StepNumber>0{step.id}</StepNumber>
      <IconContainer>
        {step.icon}
      </IconContainer>
      <StepTitle>{step.title}</StepTitle>
      <StepDescription>{step.description}</StepDescription>
      
      <DetailsList className="details-list">
        {step.details.map((detail, i) => (
          <DetailItem key={i}>{detail}</DetailItem>
        ))}
      </DetailsList>
    </StepCard>
  );
};

export default ProcessStep; 