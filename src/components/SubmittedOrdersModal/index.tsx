import { FC } from 'react';
import { SubmittedOrder } from 'interfaces/SubmittedOrder';

interface Props {
  submittedOrders: SubmittedOrder[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

import {
  Container,
  ItemContainer,
  CardContainer,
  ItemHeader,
  OrdersContainer,
  Closebutton,
} from './styles';

export const SubmittedOrdersModal: FC<Props> = ({
  submittedOrders,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Container isOpen={isOpen}>
      <CardContainer>
        <Closebutton>
          <button onClick={() => setIsOpen(false)}>X</button>
        </Closebutton>
        <h1>Submitted orders</h1>

        <OrdersContainer>
          {submittedOrders.map((order, idx) => (
            <ItemContainer key={idx}>
              <ItemHeader>
                <div>
                  <h1>Customer name:</h1>
                  <span>{order.customerName}</span>
                </div>
                <div>
                  <h1>Total fee:</h1>
                  <span>${order.totalFee}</span>
                </div>
              </ItemHeader>

              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name}</li>
                ))}
              </ul>
            </ItemContainer>
          ))}
        </OrdersContainer>
      </CardContainer>
    </Container>
  );
};
