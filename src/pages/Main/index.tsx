// styles
import { Container, Header } from './styles';

// components
import { ThemeToggler } from 'components/ThemeToggler';
import { FoodCard } from 'components/FoodCard';

// menu
import { menuArray } from 'menu';

export const Main = () => {
  return (
    <Container>
      <Header>
        <h1>Good hamburger</h1>
        <ThemeToggler />
      </Header>

      {menuArray.map((foodItem, idx) => (
        <FoodCard {...foodItem} key={idx} />
      ))}
    </Container>
  );
};
