import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLiHNHHNqTad8OQUzGajXWq4pDymbbVjE",
  authDomain: "yango-chat.firebaseapp.com",
  projectId: "yango-chat",
  storageBucket: "yango-chat.appspot.com",
  messagingSenderId: "136577059414",
  appId: "1:136577059414:web:a20d436ddfd331b33809f7",
  measurementId: "G-FPLWC4WDDR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
