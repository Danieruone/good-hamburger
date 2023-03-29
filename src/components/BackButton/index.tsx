import leftArrow from 'assets/icons/left-arrow.png';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <img src={leftArrow} />
    </Container>
  );
};
