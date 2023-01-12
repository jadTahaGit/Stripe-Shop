import './sign-in-form.styles.scss';
import { useEffect } from 'react';
import { getRedirectResult } from '@firebase/auth';
import { useState } from 'react';

import Button from '../button/botton.component';
import FormInput from '../form-input/form-input.component';

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
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong Password');
          break;
        case 'auth/user-not-found':
          alert('no user is associated with this email');
          break;
        default:
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
      <h3>Already have an account?</h3>
      <span>Sign In with your Email & Password</span>
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
        <div className="btns-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
