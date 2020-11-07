import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdcLojkTbBRjt68r5PZ2LcOb5GkVbZFpE",
    authDomain: "sophiesolliedays.firebaseapp.com",
    databaseURL: "https://sophiesolliedays.firebaseio.com",
    projectId: "sophiesolliedays",
    storageBucket: "sophiesolliedays.appspot.com",
    messagingSenderId: "855182056794",
    appId: "1:855182056794:web:35a3d0027d35b41d57a763"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  export const provider = new firebase.auth.GoogleAuthProvider();

  export const facebookProvider = new firebase.auth.FacebookAuthProvider();
  
  export default firebase;