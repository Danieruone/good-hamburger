import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  padding: 1rem;
  box-shadow: #d1d0d0 0px 0px 5px 0px;
  margin-bottom: 1rem;
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
    margin: .5rem 0;
  }
`;
