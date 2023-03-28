// redux
import type { RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/reducers/themeSlice';

// styles
import { Container } from './styles';

export const ThemeToggler = () => {
  // theme
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(toggleTheme())}>
      {theme === 'dark' ? (
        <span aria-label='Light mode' role='img'>
          🌞
        </span>
      ) : (
        <span aria-label='Dark mode' role='img'>
          🌜
        </span>
      )}
    </Container>
  );
};
