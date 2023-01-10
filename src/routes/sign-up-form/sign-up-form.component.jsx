import './sign-up-form.styles.scss';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
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
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //   generic event handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('passwords dont match');
      alert('password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className="SignUpForm">
      <h1>Sign Up with your Email & Password</h1>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="SignUpConfirmPasswordInputField">
          Confirm Password
        </label>
        <input
          type="password"
          id="SignUpConfirmPasswordInputField"
          name="confirmPassword"
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
