import { useEffect, useState } from 'react';

// types
import { FoodItem } from 'interfaces/FoodItem';

// styles
import { Container, SubtotalInfo, TotalContainer } from './styles';
import { useDiscount } from 'hooks/useDiscount';

export const TotalFeeCard = (props: {
  cart: FoodItem[];
  totalFee: string;
  setTotalFee: (totalFee: string) => void;
}) => {
  const [subTotal, setSubTotal] = useState<string>('0.0');
  const [discount] = useDiscount(props.cart);

  useEffect(() => {
    setSubTotal(
      props.cart
        .map((item) => item.price)
        .reduce((a, b) => a + Number(b), 0)
        .toFixed(2)
    );
  }, [props.cart]);

  useEffect(() => {
    const percentage = (Number(subTotal) * discount) / 100;
    const total = Number(subTotal) - percentage;
    props.setTotalFee(total.toFixed(2));
  }, [discount, subTotal]);

  return (
    <Container>
      <SubtotalInfo>
        <div>
          <span>Subtotal</span> <span>${subTotal}</span>
        </div>
        <div>
          <span>Discount</span> <span>{discount}%</span>
        </div>
      </SubtotalInfo>
      <TotalContainer>
        <div>
          <h2>Total</h2>
          <h2>${props.totalFee}</h2>
        </div>
      </TotalContainer>
    </Container>
  );
};
