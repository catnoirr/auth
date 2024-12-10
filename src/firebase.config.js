// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEcD9U8nQ6mau99Ray17lZPqzXcO7ufDg",
  authDomain: "ohhpoint.firebaseapp.com",
  projectId: "ohhpoint",
  storageBucket: "ohhpoint.firebasestorage.app",
  messagingSenderId: "1242156174",
  appId: "1:1242156174:web:9f0caac6c220e9d7248ddf",
  measurementId: "G-QS76XW5TGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
