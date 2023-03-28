// styles
import { Container, Header } from './styles';

// components
import { ThemeToggler } from 'components/ThemeToggler';

export const Main = () => {
  return (
    <Container>
      <Header>
        <h1>Good hamburger</h1>
        <ThemeToggler />
      </Header>
    </Container>
  );
};
