import { ButtonContainer } from './botton.styles';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherprops }) => {
  return (
    <ButtonContainer
      className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherprops}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
