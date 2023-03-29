import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuArray } from 'menu';

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
} from './styles';

import tableBackground from 'assets/photos/table.jpg';

export const FoodDescription = () => {
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

  return (
    <Container>
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
        <AddToOrderButton>
          Add to order ${parseFloat(totalFee.toString()).toFixed(2)}
        </AddToOrderButton>
      </AddToOrderButtonContainer>
    </Container>
  );
};
