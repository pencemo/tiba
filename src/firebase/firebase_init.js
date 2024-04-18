import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOGC6PY0l153viiFaqpbFEw7u2_ZO7LU8",
  authDomain: "project-tiba.firebaseapp.com",
  projectId: "project-tiba",
  storageBucket: "project-tiba.appspot.com",
  messagingSenderId: "1032698100402",
  appId: "1:1032698100402:web:0520a8381f8503837067ab",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebase_db = getFirestore(firebaseApp);
const firebase_auth = getAuth(firebaseApp);
// const firebase_storage = firebase.storage();
// const firebase_auth = firebase.

export { firebase_db, firebase_auth };
