import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 0;
  padding-bottom: 75%;
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-md);
  transition: opacity 0.3s ease;
`;

const CardContent = styled.div`
  color: white;
  z-index: 1;
`;

const CardCategory = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`;

const CardDescription = styled(motion.div)`
  font-size: 1rem;
  font-weight: 300;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
`;

const ViewProject = styled(motion.div)`
  margin-top: var(--spacing-md);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
`;

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, type: 'spring', stiffness: 300 }
      }}
    >
      <CardImage image={project.thumbnail} />
      <CardOverlay>
        <CardContent>
          <CardCategory>{project.category}</CardCategory>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto', marginTop: '10px' }}
          >
            {project.description}
          </CardDescription>
          <ViewProject
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            View Project
          </ViewProject>
        </CardContent>
      </CardOverlay>
    </Card>
  );
};

export default ProjectCard; 