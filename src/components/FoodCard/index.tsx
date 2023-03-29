import { FC } from 'react';
import {
  Container,
  ImageContainer,
  TextContainer,
  AddFoodButton,
} from './styles';

// types
import { FoodItem } from 'interfaces/FoodItem';

export const FoodCard: FC<FoodItem> = ({ name, image, price, type }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <TextContainer>
        <h3>{name}</h3>
        <span>{type}</span>
        <h3>${price}</h3>
      </TextContainer>
      <AddFoodButton>+</AddFoodButton>
    </Container>
  );
};
