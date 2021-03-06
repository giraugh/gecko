import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: #FAFAFA;
`;

export const Amount = styled.h1`
  font-size: 3.7rem;
  color: ${props => props.theme.primary};
  margin: 0;
`;

export const AmountLabel = styled.span`
  font-size: 1.3rem;
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

export const Ring = styled.div`
  height: 200px;
  width: 200px;
  margin: 40px auto;
  border-radius: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    top: -10px;
    left: -10px;
    transform: rotate(-90deg);
  }
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 2.5rem;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
`;

export const Remaining = styled.p`
  margin: 8px 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Date = styled.p`
  margin: 4px 0 30px;
  font-size: 1.4rem;
`;

export const Content = styled.div`
  background: #FFF;
  padding: 16px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.2);
`;
