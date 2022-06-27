import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfwDCjmiFLwoJr1UjfzsL1bXkHGFlwyCc",
  authDomain: "quicknote-1e8df.firebaseapp.com",
  projectId: "quicknote-1e8df",
  storageBucket: "quicknote-1e8df.appspot.com",
  messagingSenderId: "39848125384",
  appId: "1:39848125384:web:db5fee60091313317496fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
