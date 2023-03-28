// router
import { Routes, Route } from 'react-router-dom';

// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from 'styles/theme';

// redux
import type { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

// pages
import { Main } from './pages/Main';

const App = () => {
  // theme
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
