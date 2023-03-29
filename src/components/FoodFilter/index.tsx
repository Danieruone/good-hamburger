import { FC } from 'react';

// styles
import { Container, ItemContainer } from './styles';

// icons
import foodIcon from 'assets/icons/food.png';
import sandwichIcon from 'assets/icons/hamburger.png';
import extrasIcon from 'assets/icons/drink.png';

interface Props {
  currentFoodType: string;
  setCurrentFoodType: (currentFoodType: string) => void;
}

export const FoodFilter: FC<Props> = ({
  currentFoodType,
  setCurrentFoodType,
}) => {
  return (
    <Container>
      <ItemContainer
        isActive={currentFoodType === 'all'}
        onClick={() => setCurrentFoodType('all')}
      >
        <div>
          <img src={foodIcon} />
        </div>
        <span>All</span>
      </ItemContainer>

      <ItemContainer
        isActive={currentFoodType === 'sandwich'}
        onClick={() => setCurrentFoodType('sandwich')}
      >
        <div>
          <img src={sandwichIcon} />
        </div>
        <span>Sandwich</span>
      </ItemContainer>

      <ItemContainer
        isActive={currentFoodType === 'extra'}
        onClick={() => setCurrentFoodType('extra')}
      >
        <div>
          <img src={extrasIcon} />
        </div>
        <span>Extras</span>
      </ItemContainer>
    </Container>
  );
};
