
import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDClGv0w-GMHC3QPIFnyNoN9siUwvdD3tI",
  authDomain: "parking-jesus-lara.firebaseapp.com",
  databaseURL: "https://parking-jesus-lara-default-rtdb.firebaseio.com",
  projectId: "parking-jesus-lara",
  storageBucket: "parking-jesus-lara.appspot.com",
  messagingSenderId: "303390668977",
  appId: "1:303390668977:web:6e8b5e27a78f1ba68aca90",
  measurementId: "G-4P3FZ4KBGQ"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();