import { useState, useEffect } from 'react';
import { FoodItem } from 'interfaces/FoodItem';

export const useDiscount = (cart: FoodItem[]) => {
  const fries = 'd04146ab-a3de-482d-9c80-165952b61ad1';
  const drink = '5e928311-6e7b-41f4-a343-4792ecbab31f';

  const [totalDiscount, setTotalDiscount] = useState<number>(0);

  useEffect(() => {
    if (
      cart.find((item) => item.type === 'sandwich') &&
      cart.find((item) => item.uuid === drink) &&
      cart.find((item) => item.uuid === fries)
    ) {
      return setTotalDiscount(20);
    }
    if (
      cart.find((item) => item.type === 'sandwich') &&
      cart.find((item) => item.uuid === drink)
    ) {
      return setTotalDiscount(15);
    }
    if (
      cart.find((item) => item.type === 'sandwich') &&
      cart.find((item) => item.uuid === fries)
    ) {
      return setTotalDiscount(10);
    }
    return setTotalDiscount(0);
  }, [cart]);

  return [totalDiscount];
};
