import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem var(--container-padding);
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none'};
`;

const HeaderInner = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`;

const NavDesktop = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-family: var(--font-secondary);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 110;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${props => props.isOpen ? 'transparent' : 'var(--color-text)'};
  transition: all 0.3s ease;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: var(--color-text);
    transition: all 0.3s ease;
  }
  
  &:before {
    top: ${props => props.isOpen ? '0' : '-8px'};
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
  
  &:after {
    bottom: ${props => props.isOpen ? '0' : '-8px'};
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
  z-index: 100;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MobileNavLink = styled(motion.a)`
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  position: relative;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <HeaderContainer 
      scrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <HeaderInner>
        <Logo href="#home">Design<span>Portfolio</span></Logo>
        
        <NavDesktop>
          {navItems.map((item, index) => (
            <NavLink 
              key={item.name}
              href={item.href}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavDesktop>
        
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <MenuIcon isOpen={isMenuOpen} />
        </MenuButton>
      </HeaderInner>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink 
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 