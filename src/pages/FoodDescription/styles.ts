import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 5rem;
  background: #f5f7f9;
  height: 100vh;
`;

export const TableBackground = styled.div`
  height: 30vh;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 15px 15px 0 0;
  top: -1rem;
  background: #f5f7f9;
  padding: 6rem 1rem 1rem 1rem;
  & p {
    text-align: justify;
    color: #8a8e98;
  }
`;

export const FoodImageContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  padding: 1rem;
  background: white;
  border-radius: 50%;
  top: -10rem;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const FoodQuantityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & h2 {
    color: #f2732c;
  }
`;

export const AddToOrderButtonContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-shadow: #f5f7f9 2px -20px 20px 4px;
  padding: 1rem;
  background: #f5f7f9;
  max-width: 500px;
`;

export const AddToOrderButton = styled.button`
  background: #20242f;
  color: white;
  border: none;
  width: 80%;
  padding: 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
`;
