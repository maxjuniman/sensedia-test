import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.5;
    min-height: 100vh;
  }

  :root {
    --sensedia-purple: ${theme.colors.purple};
    --sensedia-orange: ${theme.colors.orange};
  }

  #root {
    min-height: 100vh;
  }
`;
