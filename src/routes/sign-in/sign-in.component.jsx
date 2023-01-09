import './sign-in.styles.scss';
import { useEffect } from 'react';
import { getRedirectResult } from '@firebase/auth';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="Sign-in">
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
