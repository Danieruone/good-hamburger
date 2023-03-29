import { Container } from './styles';
import cartLogo from 'assets/icons/cart.png';

export const Footer = () => {
  return (
    <Container>
      <div>
        <button>
          <img src={cartLogo} />
        </button>
      </div>
    </Container>
  );
};
