import { FC } from 'react';
import { Container } from './styles';

interface Props {
  foodQuantity: number;
  setFoodQuantity: (props: number) => void;
}

export const QuantityPicker: FC<Props> = ({
  foodQuantity,
  setFoodQuantity,
}) => {
  return (
    <Container>
      <button
        onClick={() => {
          if (foodQuantity > 1) {
            setFoodQuantity(foodQuantity - 1);
          }
        }}
      >
        -
      </button>
      <h2>{foodQuantity}</h2>
      <button onClick={() => setFoodQuantity(foodQuantity + 1)}>+</button>
    </Container>
  );
};
