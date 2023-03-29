import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { menuArray } from 'menu';
import { toast } from 'react-toastify';

// redux
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/reducers/cartSlice';

// types
import { FoodItem } from 'interfaces/FoodItem';

// components
import { QuantityPicker } from 'components/QuantityPicker';

// styles
import {
  Container,
  TableBackground,
  DetailContainer,
  FoodImageContainer,
  AddToOrderButton,
  FoodQuantityContainer,
  AddToOrderButtonContainer,
  NotFoundContainer,
} from './styles';

import tableBackground from 'assets/photos/table.jpg';

export const FoodDescription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uuid } = useParams();
  // state
  const [currentFood, setCurrentFood] = useState<FoodItem>();
  const [totalFee, setTotalFee] = useState<number>(0.0);
  const [foodQuantity, setFoodQuantity] = useState<number>(1);

  useEffect(() => {
    setCurrentFood(menuArray.find((object) => object.uuid === uuid));
  }, []);

  useEffect(() => {
    setTotalFee(Number(parseFloat(currentFood?.price || '0.0')));
  }, [currentFood]);

  useEffect(() => {
    setTotalFee(foodQuantity * Number(currentFood?.price));
  }, [foodQuantity]);

  // add order to cart
  const handleAddToCart = () => {
    if (currentFood) {
      dispatch(
        addToCart({ ...currentFood, quantity: foodQuantity.toString() })
      );
      toast.success('Order successfully added', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/');
    }
  };

  return (
    <Container>
      {currentFood ? (
        <>
          <TableBackground>
            <img src={tableBackground} />
          </TableBackground>
          <DetailContainer>
            <FoodImageContainer>
              <img src={currentFood?.image} />
            </FoodImageContainer>
            <h1>{currentFood?.name}</h1>
            <FoodQuantityContainer>
              <h2>${currentFood?.price}</h2>
              <QuantityPicker
                foodQuantity={foodQuantity}
                setFoodQuantity={setFoodQuantity}
              />
            </FoodQuantityContainer>
            <p>{currentFood?.detail}</p>
          </DetailContainer>

          <AddToOrderButtonContainer>
            <AddToOrderButton onClick={() => handleAddToCart()}>
              Add to order ${parseFloat(totalFee.toString()).toFixed(2)}
            </AddToOrderButton>
          </AddToOrderButtonContainer>
        </>
      ) : (
        <NotFoundContainer>
          <h1>Item not found</h1>
        </NotFoundContainer>
      )}
    </Container>
  );
};
