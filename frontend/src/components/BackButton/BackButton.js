import { StyledButton } from './backButtonStyle';

import arrowLeft from 'res/arrow-left.svg';

const BackButton = (props) => {
  return (
    <div>
      <StyledButton type="button" {...props}>
        <img src={arrowLeft} alt="" />
      </StyledButton>
    </div>
  );
};

export default BackButton;
