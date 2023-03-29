import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { menuArray } from 'menu';
import { toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';

// redux
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { addToCart } from 'redux/reducers/cartSlice';

// types
import { FoodItem } from 'interfaces/FoodItem';

// components
import { QuantityPicker } from 'components/QuantityPicker';
import { BackButton } from 'components/BackButton';

// styles
import {
  Container,
  TableBackground,
  DetailContainer,
  FoodImageContainer,
  AddToOrderButton,
  FoodQuantityContainer,
  AddToOrderButtonContainer,
  LoaderContainer,
  BackButtonContainer,
} from './styles';

import tableBackground from 'assets/photos/table.jpg';

export const FoodDescription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const cart = useSelector((state: RootState) => state.cart.currentItems);

  // state
  const [currentFood, setCurrentFood] = useState<FoodItem>();
  const [totalFee, setTotalFee] = useState<number>(0.0);
  const [foodQuantity, setFoodQuantity] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      if (
        foodQuantity > 1 ||
        cart.find((object) => object.uuid === currentFood.uuid)
      ) {
        toast.error(
          'you cannot add an item more than once or is already in the cart'
        );
      } else {
        dispatch(
          addToCart({ ...currentFood, quantity: foodQuantity.toString() })
        );
        toast.success('Order successfully added');
        navigate('/');
      }
    }
  };

  return (
    <Container>
      {currentFood ? (
        <>
          <BackButtonContainer>
            <BackButton />
          </BackButtonContainer>
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
        <LoaderContainer>
          <Puff
            height='80'
            width='80'
            radius={1}
            color='#F0722B'
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </LoaderContainer>
      )}
    </Container>
  );
};
