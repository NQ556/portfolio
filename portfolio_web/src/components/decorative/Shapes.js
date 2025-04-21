import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShapesContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-accent);
  opacity: 0.15;
`;

const Rectangle = styled(motion.div)`
  position: absolute;
  background-color: var(--color-accent);
  opacity: 0.15;
`;

const Shapes = ({ type = 'hero' }) => {
  // Different shape configurations for different sections
  const shapeConfigs = {
    hero: [
      { type: 'circle', size: 400, x: -100, y: -100, delay: 0.1 },
      { type: 'circle', size: 300, x: '80%', y: '60%', delay: 0.2 },
      { type: 'rectangle', width: 100, height: 200, x: '40%', y: '20%', rotation: 45, delay: 0.3 },
      { type: 'rectangle', width: 50, height: 50, x: '10%', y: '50%', rotation: 15, delay: 0.4 },
      { type: 'rectangle', width: 80, height: 80, x: '70%', y: '10%', rotation: 30, delay: 0.5 },
    ],
    about: [
      { type: 'circle', size: 250, x: '90%', y: -50, delay: 0.1 },
      { type: 'rectangle', width: 120, height: 120, x: '5%', y: '70%', rotation: 20, delay: 0.2 },
      { type: 'circle', size: 180, x: '40%', y: '90%', delay: 0.3 },
    ],
    work: [
      { type: 'rectangle', width: 80, height: 300, x: -20, y: '20%', rotation: 0, delay: 0.1 },
      { type: 'circle', size: 200, x: '85%', y: '60%', delay: 0.2 },
      { type: 'rectangle', width: 150, height: 60, x: '60%', y: '10%', rotation: 15, delay: 0.3 },
    ],
    process: [
      { type: 'circle', size: 220, x: '5%', y: '10%', delay: 0.1 },
      { type: 'rectangle', width: 100, height: 200, x: '90%', y: '30%', rotation: -15, delay: 0.2 },
      { type: 'rectangle', width: 70, height: 70, x: '50%', y: '85%', rotation: 25, delay: 0.3 },
    ],
    contact: [
      { type: 'circle', size: 180, x: '90%', y: '5%', delay: 0.1 },
      { type: 'rectangle', width: 100, height: 100, x: '10%', y: '40%', rotation: 45, delay: 0.2 },
      { type: 'circle', size: 150, x: '50%', y: '90%', delay: 0.3 },
    ],
  };

  const shapes = shapeConfigs[type] || shapeConfigs.hero;

  return (
    <ShapesContainer>
      {shapes.map((shape, index) => {
        if (shape.type === 'circle') {
          return (
            <Circle
              key={`${type}-circle-${index}`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                left: typeof shape.x === 'string' ? shape.x : `${shape.x}px`,
                top: typeof shape.y === 'string' ? shape.y : `${shape.y}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{
                duration: 1,
                delay: shape.delay,
                type: 'spring',
                stiffness: 50
              }}
            />
          );
        } else {
          return (
            <Rectangle
              key={`${type}-rectangle-${index}`}
              style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                left: typeof shape.x === 'string' ? shape.x : `${shape.x}px`,
                top: typeof shape.y === 'string' ? shape.y : `${shape.y}px`,
                transform: `rotate(${shape.rotation}deg)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{
                duration: 1,
                delay: shape.delay,
                type: 'spring',
                stiffness: 50
              }}
            />
          );
        }
      })}
    </ShapesContainer>
  );
};

export default Shapes; 