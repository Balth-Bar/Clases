import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Text = styled.p`
  font-size: ${({ size }) => size}px;
  text-align: center;
  color: blue;
  font-weight: bold;
`;

export const Container = styled.div`
display: flex;
  flex:1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  flex-direction: column;
` 
