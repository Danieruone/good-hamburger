import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f7f9;
  min-height: 100vh;
  padding: 1rem;
  & h1 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
`;

export const CardsContainer = styled.div`
  margin: 2rem 0;
`;

export const SendButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  & input {
    padding: 1rem;
    border: none;
  }
  & button {
    margin-top: 1rem;
    background: black;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
