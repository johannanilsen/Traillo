import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "traillo.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "traillo",
  storageBucket: "traillo.appspot.com",
  messagingSenderId: "974015841591",
  appId: "1:974015841591:web:9737d91803d333087f86b2",
  measurementId: "G-PT7BTNPDXJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
