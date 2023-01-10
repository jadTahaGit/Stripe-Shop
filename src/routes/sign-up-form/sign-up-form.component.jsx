import './sign-up-form.styles.scss';

import { useState } from 'react';

// object
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = defaultFormFields;

  //   generic event handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="SignUpForm">
      <h1>Sign Up with your Email & Password</h1>
      <form>
        <label htmlFor="SignUpDisplayNameInputField">Display Name</label>
        <input
          type="text"
          id="SignUpDisplayNameInputField"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <label htmlFor="SignUpEmailInputField">Email</label>
        <input
          type="email"
          id="SignUpEmailInputField"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="SignUpPasswordInputField">Password</label>
        <input
          type="password"
          id="SignUpPasswordInputField"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label htmlFor="SignUpPasswordInputField">Confirm Password</label>
        <input
          type="password"
          id="SignUpPasswordInputField"
          name="confrimPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
