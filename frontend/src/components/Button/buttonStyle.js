import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: ${props => props.variant === 'secondary' ? '#DDD' : props.theme.primary};
  color: ${props => props.variant === 'secondary' ? '#000' : '#FFF'};
  border: 0;
  font: inherit;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
`;
