import styled from 'styled-components';

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
  background: white;
  padding-top: 6rem;
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
