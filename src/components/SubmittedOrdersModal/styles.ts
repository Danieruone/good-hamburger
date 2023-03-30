import styled from 'styled-components';

interface ItemContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ItemContainerProps>`
  ${(props) => !props.isOpen && 'display: none;'}
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardContainer = styled.div` 
  background white;
  width:90%;
  max-width: 500px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  height: 600px;
  border-radius: 15px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const Closebutton = styled.div`
  margin: 1rem 1rem;
  & button {
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const OrdersContainer = styled.div`
  overflow-y: scroll;
  height: 450px;
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  width: 100%;
  & ul {
    margin: 0 0 1rem 0;
  }
  & li {
    margin: 0;
    font-size: 0.7rem;
    color: gray;
  }
`;

export const ItemHeader = styled.div`
  padding: 1rem 2rem;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      font-size: 0.9rem;
      margin: 0;
    }
    & span {
      font-size: 0.9rem;
    }
  }
`;
