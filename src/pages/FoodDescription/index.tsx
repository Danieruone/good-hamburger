import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menuArray } from 'menu';

// types
import { FoodItem } from 'interfaces/FoodItem';

// styles
import { TableBackground, DetailContainer, FoodImageContainer } from './styles';
import tableBackground from 'assets/photos/table.jpg';

export const FoodDescription = () => {
  const [currentFood, setCurrentFood] = useState<FoodItem>();
  const { uuid } = useParams();

  useEffect(() => {
    setCurrentFood(menuArray.find((object) => object.uuid === uuid));
  }, []);

  return (
    <div>
      <TableBackground>
        <img src={tableBackground} />
      </TableBackground>
      <DetailContainer>
        <FoodImageContainer>
          <img src={currentFood?.image} />
        </FoodImageContainer>
        <h1>{currentFood?.name}</h1>
      </DetailContainer>
    </div>
  );
};
