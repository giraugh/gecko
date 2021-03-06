import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: 4px;
`;

export const StyledInput = styled.input`
  font: inherit;
  width: 100%;
  border: 1px solid ${props => props.theme.text};
  border-radius: 5px;
  padding: 8px 12px;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  font: inherit;
  width: 100%;
  flex: 1;
  resize: none;
  border: 1px solid ${props => props.theme.text};
  border-radius: 5px;
  padding: 8px 12px;
  box-sizing: border-box;
`;
