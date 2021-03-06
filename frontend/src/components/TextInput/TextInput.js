import {
  Wrapper,
  StyledLabel,
  StyledInput,
  StyledTextArea,
} from './textInputStyle';

const TextInput = ({
  label,
  type = 'text',
  id,
  name,
  register,
  wrapperStyle,
  ...props
}) => (
  <Wrapper style={wrapperStyle}>
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}

    {type === 'textarea' ? (
      <StyledTextArea
        id={id}
        name={name}
        ref={register}
        {...props}
      />
    ) : (
      <StyledInput
        type={type}
        id={id}
        name={name}
        ref={register}
        {...props}
      />
    )}
  </Wrapper>
);

export default TextInput;
