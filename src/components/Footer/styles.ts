import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  position fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background: white;
  display: flex;
  justify-content: center;
  box-shadow: #bfbfbf 0px 1px 9px 0px;
  & div{
    position relative;
    background: white;
    width: 6rem; 
    height: 6rem;
    bottom: 2rem;
    border-radius: 50%;
  }
  & button{
    position absolute;
    width: 4rem;
    height: 4rem;
    left: 1rem;
    bottom: 1.4rem;
    border-radius: 50%;
    border: none;
    background: #f0722b;
    padding: 1rem;
    cursor: pointer;
  }
  & img{
    width: 100%;
  }
`;

export const NotificationContainer = styled.span`
  position: absolute;
  background: red;
  right: 20px;
  top: 10px;
  z-index: 2;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
