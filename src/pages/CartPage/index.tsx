// redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from 'redux/reducers/cartSlice';
import type { RootState } from 'redux/store';

// components
import { BackButton } from 'components/BackButton';
import { CartCard } from 'components/CartCard';

// styles
import { Container, BackButtonContainer, CardsContainer } from './styles';

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.currentItems);

  const deleteCartItem = (uuid: string) => {
    dispatch(deleteItemFromCart(uuid));
  };

  return (
    <Container>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <h1>My order</h1>

      <CardsContainer>
        {cart.map((foodItem) => (
          <CartCard
            {...foodItem}
            deleteCartItem={deleteCartItem}
            key={foodItem.uuid}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
