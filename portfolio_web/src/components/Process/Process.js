import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../shared/Section';
import Shapes from '../decorative/Shapes';
import ProcessStep from './ProcessStep';

const ProcessContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  
  p {
    font-size: 1.1rem;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Discover',
      icon: '🔍',
      description: 'Research and gather insights to understand user needs, business goals, and market context.',
      details: [
        'User Interviews',
        'Competitive Analysis',
        'Market Research',
        'Stakeholder Workshops'
      ]
    },
    {
      id: 2,
      title: 'Define',
      icon: '📋',
      description: 'Define the problem, establish goals, and create a roadmap for the design process.',
      details: [
        'Problem Definition',
        'User Personas',
        'Journey Mapping',
        'Information Architecture'
      ]
    },
    {
      id: 3,
      title: 'Design',
      icon: '✏️',
      description: 'Create wireframes, visual designs, and interactive prototypes that bring the solution to life.',
      details: [
        'Wireframing',
        'UI Design',
        'Prototyping',
        'Design Systems'
      ]
    },
    {
      id: 4,
      title: 'Deliver',
      icon: '🚀',
      description: 'Test with users, refine designs, and collaborate with developers to bring the product to market.',
      details: [
        'Usability Testing',
        'Design Handoff',
        'Development Support',
        'Launch & Iterate'
      ]
    }
  ];

  return (
    <Section id="process" title="My Process">
      <Shapes type="process" />
      
      <ProcessContent>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My design approach is methodical yet flexible, adapting to each project's unique needs. I believe in a user-centered process that balances creativity with strategy to create meaningful experiences.
        </motion.p>
      </ProcessContent>
      
      <ProcessSteps>
        {processSteps.map((step, index) => (
          <ProcessStep 
            key={step.id}
            step={step}
            index={index}
          />
        ))}
      </ProcessSteps>
    </Section>
  );
};

export default Process; 