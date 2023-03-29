import { useNavigate } from 'react-router-dom';

// styles
import leftArrow from 'assets/icons/left-arrow.png';
import { Container } from './styles';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <img src={leftArrow} />
    </Container>
  );
};
