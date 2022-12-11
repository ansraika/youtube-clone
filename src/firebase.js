import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxP8UTW_nkfZE9MkYYLbtyWORH7S1eJuc",
    authDomain: "clone-b3db0.firebaseapp.com",
    projectId: "clone-b3db0",
    storageBucket: "clone-b3db0.appspot.com",
    messagingSenderId: "632424061907",
    appId: "1:632424061907:web:928a73f88eac951d7aad26",
    measurementId: "G-XJRJQJ6XRP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //firestore is the cloud-hosted, NoSQL database in firebase

  export {db};