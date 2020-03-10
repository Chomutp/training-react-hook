require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyArY6--_sJRy1E73aBzaFnbmQBivJ4u8q4",
  authDomain: "react-intro-blog-9a160.firebaseapp.com",
  databaseURL: "https://react-intro-blog-9a160.firebaseio.com",
  projectId: "react-intro-blog-9a160",
  storageBucket: "react-intro-blog-9a160.appspot.com",
  messagingSenderId: "966478472311",
  appId: "1:966478472311:web:fc89c20bdbd3580a0dd272"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
