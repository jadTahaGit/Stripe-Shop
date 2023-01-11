import './sign-in.styles.scss';
import { useEffect } from 'react';
import { getRedirectResult } from '@firebase/auth';
import { useState } from 'react';

import Button from '../../components/button/botton.component';
import FormInput from '../../components/form-input/form-input.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signIn_Auth_WithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signIn_Auth_WithEmailAndPassword(email, password);

      resetFormFields();
      console.log(user);
    } catch (error) {
      // these dont exist on SignIn
      if (error.code === 'auth/wrong-password') {
        alert('Wrong Password');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  //   generic event handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="Sign-in">
      <h1>Sign In Page</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          id="SignInEmailInputField"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          id="SignInPasswordInputField"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button onClick={handleSubmit}> Sign in</Button>
      </form>
      <Button buttonType="google" onClick={logGoogleUser}>
        {' '}
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
