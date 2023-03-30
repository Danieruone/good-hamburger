import { FC } from 'react';

// types
import { FoodItem } from 'interfaces/FoodItem';

// styles
import trashIcon from 'assets/icons/trash.png';
import {
  Container,
  ImageContainer,
  InfoContainer,
  TrashButton,
} from './styles';

interface Props extends FoodItem {
  deleteCartItem: (uuid: string) => void;
}

export const CartCard: FC<Props> = ({
  image,
  name,
  type,
  price,
  uuid,
  deleteCartItem,
}) => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <InfoContainer>
        <h2>{name}</h2>
        <span>{type}</span>
        <h3>${price}</h3>
      </InfoContainer>

      <TrashButton onClick={() => deleteCartItem(uuid)}>
        <img src={trashIcon} />
      </TrashButton>
    </Container>
  );
};
