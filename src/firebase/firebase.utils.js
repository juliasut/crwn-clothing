// use /compat/ to make version 8 firebase imports work in version 9
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyClztTswirn-nlN0YJHXAZNb5-aLbO8qB0",
  authDomain: "crwn-db-b2fad.firebaseapp.com",
  projectId: "crwn-db-b2fad",
  storageBucket: "crwn-db-b2fad.appspot.com",
  messagingSenderId: "291549530024",
  appId: "1:291549530024:web:045cc44fe9f69907d2ff9d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =  firebase.firestore();

const provider = new GoogleAuthProvider();
// trigger Google account pop-up when we use this auth provider
provider.setCustomParameters({ prompt: 'select_account' });


// choosing Google popup out of multiple possible ones by passing the provider we've assigned
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export default firebase;