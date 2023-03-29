// styles
import { useEffect, useState } from 'react';
import { Container, Header } from './styles';

// components
import { ThemeToggler } from 'components/ThemeToggler';
import { FoodCard } from 'components/FoodCard';
import { FoodFilter } from 'components/FoodFilter';

// menu
import { menuArray } from 'menu';

export const Main = () => {
  const [currentFoodType, setCurrentFoodType] = useState('all');
  const [filteredFood, setFilteredFood] = useState(menuArray);

  useEffect(() => {
    setFilteredFood(
      currentFoodType === 'all'
        ? menuArray
        : menuArray.filter((foodObject) => foodObject.type === currentFoodType)
    );
  }, [currentFoodType]);

  return (
    <Container>
      <Header>
        <h1>Good hamburger</h1>
        <ThemeToggler />
      </Header>

      <FoodFilter
        currentFoodType={currentFoodType}
        setCurrentFoodType={setCurrentFoodType}
      />

      {filteredFood.map((foodItem, idx) => (
        <FoodCard {...foodItem} key={idx} />
      ))}
    </Container>
  );
};
