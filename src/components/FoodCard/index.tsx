import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  TextContainer,
  AddFoodButton,
} from './styles';

// types
import { FoodItem } from 'interfaces/FoodItem';

export const FoodCard: FC<FoodItem> = ({ name, image, price, type, uuid }) => {
  const navigate = useNavigate();
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
      <AddFoodButton onClick={() => navigate(`/food-description/${uuid}`)}>
        +
      </AddFoodButton>
    </Container>
  );
};
