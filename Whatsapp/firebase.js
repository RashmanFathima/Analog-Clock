import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxSo389BRBnCHL08X0Q7ntLvj51dEHWF0",
    authDomain: "whats-app-clone-35ae2.firebaseapp.com",
    projectId: "whats-app-clone-35ae2",
    storageBucket: "whats-app-clone-35ae2.appspot.com",
    messagingSenderId: "348886006866",
    appId: "1:348886006866:web:47a0de9c86793d11d2738b",
    measurementId: "G-1RQFLJ3H6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;