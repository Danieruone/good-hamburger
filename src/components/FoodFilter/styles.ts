import styled from 'styled-components';

interface ItemContainerProps {
  isActive: boolean;
}

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
`;

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  & div {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
  }
  & img {
    width: 2.5rem;
    height: 2.5rem;
  }
  & span {
    color: gray;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    ${(props) =>
      props.isActive &&
      'background: #f2732b; color: white; width: 100%; text-align: center; border-radius: 10px; padding: 0 .1rem'}
  }
`;
