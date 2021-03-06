import styled from '@emotion/styled';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Slide = styled.div`
  margin: 15px;
  background-color: ${props => props.slideColor};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  color: #FFF;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: background-color .1s;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  text-align: center;
`;

export const P = styled.p`
  text-align: center;
`;

export const Graphic = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 15px;
`;

export const ArrowButton = styled.button`
  border: 0;
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background: #DDD;
  cursor: pointer;

  ${props => props.disabled && `
    opacity: .3;
    cursor: not-allowed;
  `}
`;
