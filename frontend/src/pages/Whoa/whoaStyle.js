import styled from '@emotion/styled';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Slide = styled.div`
  margin: 15px;
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  color: #FFF;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 40px 0;
  font-size: 3rem;
  text-align: center;
`;

export const Graphic = styled.img`
  width: 120px;
`;

export const Button = styled.button`
  border: 0;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  background: #FFF;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  font-size: 1.5em;
  padding-bottom: 4px;
  box-shadow: inset 0 -4px 0 #537d3b;
`;
