import { useNavigate } from 'react-router-dom';

// styles
import { Container, NotificationContainer } from './styles';
import cartLogo from 'assets/icons/cart.png';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

export const Footer = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.currentItems);
  return (
    <Container>
      <div>
        <NotificationContainer>{cart.length}</NotificationContainer>
        <button onClick={() => navigate('/cart')}>
          <img src={cartLogo} />
        </button>
      </div>
    </Container>
  );
};
