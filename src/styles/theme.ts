import { createGlobalStyle } from 'styled-components';

interface DefaultTheme {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    width: 100%;
  }
`;

export const lightTheme = {
  body: 'white',
  text: '#121620',
};

export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
};
