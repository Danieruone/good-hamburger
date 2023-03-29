import { Container, NotificationContainer } from './styles';
import cartLogo from 'assets/icons/cart.png';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

export const Footer = () => {
  const cart = useSelector((state: RootState) => state.cart.currentItems);
  return (
    <Container>
      <div>
        <NotificationContainer>{cart.length}</NotificationContainer>
        <button>
          <img src={cartLogo} />
        </button>
      </div>
    </Container>
  );
};
