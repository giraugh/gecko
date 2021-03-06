import {
  Wrapper,
  StyledLabel,
  StyledSelect,
} from './selectInputStyle';

const SelectInput = ({
  label,
  id,
  name,
  register,
  wrapperStyle,
  options = [],
  ...props
}) => (
  <Wrapper style={wrapperStyle}>
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}

    <StyledSelect
      id={id}
      name={name}
      ref={register}
      {...props}
    >
      {options.map((option, i) =>
        <option value={option.value} key={i}>{option.label}</option>
      )}
    </StyledSelect>
  </Wrapper>
);

export default SelectInput;
