import { Group, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  const { id } = otherProps;
  return (
    <Group>
      <Input {...otherProps} />
      {/* If label exists --> render it */}
      {label && (
        <FormInputLabel
          htmlFor={id}
          className={`${otherProps.value.length ? 'shrink' : ''} `}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
