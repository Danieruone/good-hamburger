// router
import { Routes, Route } from 'react-router-dom';

// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles, GlobalContainer } from 'styles/theme';

// redux
import type { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

// pages
import { Main } from './pages/Main';
import { FoodDescription } from 'pages/FoodDescription';

const App = () => {
  // theme
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <GlobalContainer>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/food-description/:uuid' element={<FoodDescription />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </GlobalContainer>
    </ThemeProvider>
  );
};

export default App;
