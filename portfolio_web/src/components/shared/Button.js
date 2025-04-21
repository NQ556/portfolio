import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonWrapper = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  background-color: ${props => props.variant === 'outlined' ? 'transparent' : 'var(--color-accent)'};
  color: ${props => props.variant === 'outlined' ? 'var(--color-accent)' : 'white'};
  border: 2px solid ${props => props.variant === 'outlined' ? 'var(--color-accent)' : 'transparent'};
  font-family: var(--font-secondary);
  font-size: ${props => props.size === 'small' ? '0.9rem' : '1rem'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: ${props => props.variant === 'outlined' ? 'var(--color-accent)' : 'transparent'};
    color: ${props => props.variant === 'outlined' ? 'white' : 'var(--color-accent)'};
    border: 2px solid var(--color-accent);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-left: ${props => props.iconPosition === 'right' ? '0.5rem' : '0'};
    margin-right: ${props => props.iconPosition === 'left' ? '0.5rem' : '0'};
  }
`;

const Button = ({ 
  children, 
  variant = 'filled', 
  size = 'medium',
  icon = null,
  iconPosition = 'right',
  onClick,
  ...props 
}) => {
  return (
    <ButtonWrapper 
      variant={variant} 
      size={size}
      iconPosition={iconPosition}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </ButtonWrapper>
  );
};

export default Button; 