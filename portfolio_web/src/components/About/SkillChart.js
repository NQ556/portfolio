import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillChartContainer = styled.div`
  margin-top: var(--spacing-md);
`;

const SkillTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const SkillTag = styled(motion.div)`
  background-color: var(--color-light-gray);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent);
    color: white;
    transform: translateY(-3px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const SkillIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconCircle = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  
  svg {
    width: 30px;
    height: 30px;
    color: var(--color-accent);
  }
`;

const SkillLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const SkillChart = () => {
  const skills = [
    { name: 'UI Design' },
    { name: 'UX Design' },
    { name: 'Wireframing' },
    { name: 'Prototyping' },
    { name: 'Visual Design' },
    { name: 'Design Systems' },
    { name: 'Typography' },
    { name: 'User Research' },
    { name: 'Responsive Design' }
  ];
  
  const tools = [
    { name: 'Figma', icon: '🔍' },
    { name: 'Sketch', icon: '✏️' }
  ];

  return (
    <SkillChartContainer>
      <SkillTagsContainer>
        {skills.map((skill, index) => (
          <SkillTag
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4 + (index * 0.05),
              type: 'spring',
              stiffness: 100
            }}
          >
            {skill.name}
          </SkillTag>
        ))}
      </SkillTagsContainer>
      
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ marginTop: 'var(--spacing-md)' }}
      >
        Tools & Software
      </motion.h4>
      
      <SkillsGrid>
        {tools.map((tool, index) => (
          <SkillIcon
            key={tool.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
          >
            <IconCircle
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'var(--color-accent)', 
                color: 'white' 
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {tool.icon}
            </IconCircle>
            <SkillLabel>{tool.name}</SkillLabel>
          </SkillIcon>
        ))}
      </SkillsGrid>
    </SkillChartContainer>
  );
};

export default SkillChart; 