import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../shared/Section';
import Shapes from '../decorative/Shapes';
import SkillChart from './SkillChart';

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    gap: var(--spacing-lg);
  }
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HighlightText = styled.span`
  position: relative;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35%;
    background-color: var(--color-accent);
    opacity: 0.2;
    z-index: -1;
  }
`;

const SkillsContainer = styled.div`
  margin-top: var(--spacing-lg);
`;

const About = () => {
  return (
    <Section id="about" title="About Me">
      <Shapes type="about" />
      
      <AboutWrapper>
        <AboutContent>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hello! I'm a <HighlightText>junior UX/UI designer</HighlightText> with a passion for creating intuitive and impactful digital experiences. I'm just starting my design journey and excited to bring fresh perspectives to the field.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My approach centers on <HighlightText>human-centered design</HighlightText> — understanding users' needs and behaviors to create solutions that are not only visually appealing but also functional and meaningful.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            When I'm not designing, you'll find me exploring new coffee shops, practicing photography, or expanding my collection of design books.
          </motion.p>
          
          <SkillsContainer>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Skills & Tools
            </motion.h3>
            
            <SkillChart />
          </SkillsContainer>
        </AboutContent>
      </AboutWrapper>
    </Section>
  );
};

export default About; 