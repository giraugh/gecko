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
