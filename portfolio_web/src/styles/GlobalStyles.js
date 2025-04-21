import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Palette */
    --color-background: #FFFFFF;
    --color-text: #151515;
    --color-text-light: #555555;
    --color-accent: #8ED1B5; /* Light mint green accent color */
    --color-light-gray: #F5F5F5;
    --color-medium-gray: #E0E0E0;
    
    /* Typography */
    --font-primary: 'Inter', sans-serif;
    --font-secondary: 'Space Grotesk', sans-serif;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Container widths */
    --container-width: 1200px;
    --container-padding: 1.5rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
    overflow-x: hidden;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-secondary);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    font-size: 3.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: var(--spacing-md);
    font-weight: 300;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-accent);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: var(--font-primary);
    cursor: pointer;
    border: none;
    background: none;
  }

  section {
    margin: var(--spacing-xl) 0;
  }

  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }
`;

export default GlobalStyles; 