import './sign-in.styles.scss';
import { useEffect } from 'react';
import { getRedirectResult } from '@firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../utils/firebase/firebase.utils';

const SignIn = () => {
  // On Mount when comming to the Website Back this will start
  useEffect(() => {
    async function declareMyResponse() {
      const response = await getRedirectResult(auth); //kind of auth Memory
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    declareMyResponse();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="Sign-in">
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
