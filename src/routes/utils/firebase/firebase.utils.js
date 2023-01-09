import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUya6Tqd2BnmxBpg6cP-RwGOt-cSJMLm4',
  authDomain: 'stripe-clothes-store.firebaseapp.com',
  projectId: 'stripe-clothes-store',
  storageBucket: 'stripe-clothes-store.appspot.com',
  messagingSenderId: '262123923195',
  appId: '1:262123923195:web:67c72a02eea5d553f5b25e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google needs these
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
