import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZDS1xtSmYI9QVcCy8x6C9854MzEDMze0",
  authDomain: "gclonev1.firebaseapp.com",
  projectId: "gclonev1",
  storageBucket: "gclonev1.appspot.com",
  messagingSenderId: "885494006809",
  appId: "1:885494006809:web:b862ae6802bf208a8cd688",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
