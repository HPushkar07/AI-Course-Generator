// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "project1-ea045.firebaseapp.com",
  projectId: "project1-ea045",
  storageBucket: "project1-ea045.appspot.com",
  messagingSenderId: "33558402804",
  appId: "1:33558402804:web:553948c7e6929d183070a1",
  measurementId: "G-7KSG4V6HME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)