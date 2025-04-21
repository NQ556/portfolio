import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  overflow-y: auto;
`;

const DetailContainer = styled(motion.div)`
  background-color: white;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: 8px;
  overflow-y: auto;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-light-gray);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-medium-gray);
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: var(--color-text);
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);
`;

const ProjectTitle = styled.h2`
  margin-bottom: var(--spacing-sm);
`;

const ProjectCategory = styled.div`
  font-size: 1rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  margin-bottom: var(--spacing-lg);
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ProjectSection = styled.div`
  margin-bottom: var(--spacing-lg);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    position: relative;
    padding-left: 15px;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 5px;
      height: 15px;
      background-color: var(--color-accent);
    }
  }
  
  p {
    line-height: 1.6;
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: var(--spacing-sm);
`;

const ToolTag = styled.span`
  background-color: var(--color-light-gray);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const ProjectDetail = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOverlayClick}
    >
      <DetailContainer
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <CloseButton onClick={onClose} />
        <ProjectImage image={project.fullImage} />
        
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
          <ProjectDescription>{project.description}</ProjectDescription>
          
          <ProjectSection>
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
          </ProjectSection>
          
          <ProjectSection>
            <h3>The Solution</h3>
            <p>{project.solution}</p>
          </ProjectSection>
          
          <ProjectSection>
            <h3>The Results</h3>
            <p>{project.results}</p>
          </ProjectSection>
          
          <ProjectSection>
            <h3>Tools & Technologies</h3>
            <ToolsContainer>
              {project.tools.map((tool, index) => (
                <ToolTag key={index}>{tool}</ToolTag>
              ))}
            </ToolsContainer>
          </ProjectSection>
          
          <ButtonsContainer>
            <Button>Visit Live Project</Button>
            <Button variant="outlined">Next Project</Button>
          </ButtonsContainer>
        </ProjectContent>
      </DetailContainer>
    </Overlay>
  );
};

export default ProjectDetail; 