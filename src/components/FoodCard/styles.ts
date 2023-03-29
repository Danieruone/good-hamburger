import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  padding: 1rem;
  box-shadow: #d1d0d0 0px 0px 5px 0px;
  margin-bottom: 1rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  & span {
    color: gray;
    font-size: 0.9rem;
  }
  & h3 {
    margin: 0.5rem 0;
  }
`;

export const AddFoodButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: #f0722b;
  color: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
