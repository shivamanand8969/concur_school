// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "concur-blog.firebaseapp.com",
  projectId: "concur-blog",
  storageBucket: "concur-blog.firebasestorage.app",
  messagingSenderId: "389315745449",
  appId: "1:389315745449:web:86b5842d8bb821b6203bb8",
  measurementId: "G-Q61278TH11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

