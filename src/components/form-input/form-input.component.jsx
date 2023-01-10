import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  const { id } = otherProps;
  return (
    <div className="group">
      {/* If label exists --> render it */}
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
