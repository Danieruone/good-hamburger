import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 130px;
  align-items: center;
  padding: 0 0.5rem;
  height: auto;
  border-radius: 15px;
  height: 2.5rem;
  & button {
    border-radius: 50%;
    border: none;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
  & h2 {
    margin: 0;
    color: black;
  }
`;
