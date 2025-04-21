import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: var(--spacing-lg) 0;
  background-color: var(--color-light-gray);
`;

const FooterInner = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--color-accent);
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const FooterLink = styled.a`
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-medium-gray);
  margin: var(--spacing-md) 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin: 0;
`;

const ScrollToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:before {
    content: '↑';
    margin-right: 5px;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterInner>
        <FooterLogo>
          Design<span>Portfolio</span>
        </FooterLogo>
        
        <FooterNav>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#work">Work</FooterLink>
          <FooterLink href="#process">Process</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>
        
        <FooterDivider />
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} DesignPortfolio. All rights reserved.
          </Copyright>
          
          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Back to top
          </ScrollToTop>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer; 