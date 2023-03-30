import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 15px;
`;

export const ImageContainer = styled.div`
  width: 10rem;
  height: 5rem;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin-left: 1rem;
  padding: 0.5rem;
  & h2 {
    margin: 0;
    font-size: 1rem;
  }
  & h3 {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const TrashButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  background: none;
  border: none;
  & img {
    width: 100%;
    height: 100%;
  }
`;
