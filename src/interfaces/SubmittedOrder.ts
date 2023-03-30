import { FoodItem } from './FoodItem';

export interface SubmittedOrder {
  items: FoodItem[];
  totalFee: string;
  customerName: string;
}
