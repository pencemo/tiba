// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOGC6PY0l153viiFaqpbFEw7u2_ZO7LU8",
  authDomain: "project-tiba.firebaseapp.com",
  projectId: "project-tiba",
  storageBucket: "project-tiba.appspot.com",
  messagingSenderId: "1032698100402",
  appId: "1:1032698100402:web:0520a8381f8503837067ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
