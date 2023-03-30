import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 15px;
`;

export const SubtotalInfo = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 1rem;
  & div {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    color: gray;
    font-size: 0.9rem;
  }
`;

export const TotalContainer = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
    & h2 {
      margin: 1rem 0;
      font-size: 1rem;
    }
  }
`;
