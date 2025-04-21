import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../shared/Section';
import Shapes from '../decorative/Shapes';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const projectsData = [
  {
    id: 1,
    title: 'Food App',
    category: 'Mobile App',
    description: 'A food ordering application that allows users to purchase meals from various restaurants, track their orders in real-time, and schedule deliveries for later.',
    thumbnail: '/images/project-1-thumb.jpg',
    fullImage: '/images/project-1-full.jpg',
    challenge: 'Creating a seamless food ordering experience that integrates multiple restaurants while providing reliable order tracking and flexible scheduling options.',
    solution: 'I designed an intuitive interface with a focus on restaurant discovery, streamlined checkout, and real-time order tracking. The app features a scheduling system that allows users to place orders for future delivery.',
    results: 'The app achieved high user satisfaction with particular praise for the easy ordering process and the convenient order scheduling feature. User retention rates exceeded expectations by 30%.',
    tools: ['Figma', 'Principle', 'UserTesting'],
  },
  {
    id: 2,
    title: 'Travel App',
    category: 'Web Application',
    description: 'A travel planning platform that recommends tourist attractions based on hotel location and helps users create customized itineraries.',
    thumbnail: '/images/project-2-thumb.jpg',
    fullImage: '/images/project-2-full.jpg',
    challenge: 'Developing a system that dynamically recommends relevant tourist attractions based on hotel location, travel distance preferences, and trip duration.',
    solution: 'I created an interactive map interface that displays hotels and nearby attractions. The system provides tailored recommendations based on adjustable distance parameters and automatically generates optimized itineraries for different trip durations (2-4 days).',
    results: 'The platform significantly improved trip planning efficiency, with users reporting that the customized itineraries saved them hours of research. The attraction reservation feature has seen steady adoption growth.',
    tools: ['React', 'Google Maps API', 'Figma'],
  }
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Section id="work" title="Selected Work">
      <Shapes type="work" />
      
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openProject(project)}
          />
        ))}
      </ProjectsGrid>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Work; 