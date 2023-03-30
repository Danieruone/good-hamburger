import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItemFromCart,
  addToOrder,
  clearCart,
} from 'redux/reducers/cartSlice';
import type { RootState } from 'redux/store';

// components
import { BackButton } from 'components/BackButton';
import { CartCard } from 'components/CartCard';
import { TotalFeeCard } from 'components/TotalFeeCard';
import { SubmittedOrdersModal } from 'components/SubmittedOrdersModal';

// styles
import {
  Container,
  BackButtonContainer,
  CardsContainer,
  SendButtonContainer,
} from './styles';

export const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redux store
  const cart = useSelector((state: RootState) => state.cart.currentItems);
  const submittedOrders = useSelector(
    (state: RootState) => state.cart.submittedOrders
  );

  // state
  const [totalFee, setTotalFee] = useState<string>('0.0');
  const [customerName, setCustomerName] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const deleteCartItem = (uuid: string) => {
    dispatch(deleteItemFromCart(uuid));
  };

  const submitOrder = () => {
    if (customerName !== '') {
      const orderToSubmit = {
        items: cart,
        totalFee,
        customerName,
      };
      dispatch(addToOrder(orderToSubmit));
      dispatch(clearCart());
      toast.success('Order successfully submitted');
      navigate('/');
    } else {
      toast.error('Please type your name to submit the order');
    }
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

      <TotalFeeCard cart={cart} totalFee={totalFee} setTotalFee={setTotalFee} />
      {cart.length > 0 ? (
        <SendButtonContainer isSubbmittedOrder={false}>
          <input
            type='text'
            placeholder='Type your name...'
            onChange={(event) => setCustomerName(event.target.value)}
          />
          <button onClick={() => submitOrder()}>Place to order</button>
        </SendButtonContainer>
      ) : (
        <SendButtonContainer isSubbmittedOrder={false}>
          <span>You don't have items in your cart</span>
        </SendButtonContainer>
      )}

      <SendButtonContainer isSubbmittedOrder={true}>
        <button onClick={() => setIsModalOpen(true)}>
          Submitted orders {submittedOrders.length}
        </button>
      </SendButtonContainer>

      <SubmittedOrdersModal
        submittedOrders={submittedOrders}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </Container>
  );
};
