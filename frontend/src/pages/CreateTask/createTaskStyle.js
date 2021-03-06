import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
`;

export const Or = styled.div`
  margin: 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: .2em;
  text-align: center;
`;

export const Prefab = styled.button`
  margin: 6px 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 12px 16px 16px;
  border-radius: 10px;
  border: 0;
  background: #EEE;
  box-shadow: inset 0 -4px 0 rgba(0,0,0,.3);
`;

export const MoneyInput = styled.div`
  margin: 6px 0;
  display: flex;
  align-items: center;
  font-size: 1.5em;

  & span {
    margin-right: 16px;
  }
`;
