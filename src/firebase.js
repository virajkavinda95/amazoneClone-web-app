import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKQx2pxAykJmaUZd3hkqLA05Fq0HDezsI",
    authDomain: "e-challenge-8cd99.firebaseapp.com",
    projectId: "e-challenge-8cd99",
    storageBucket: "e-challenge-8cd99.appspot.com",
    messagingSenderId: "881837771081",
    appId: "1:881837771081:web:b43991ccfe64be25dc7298"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };