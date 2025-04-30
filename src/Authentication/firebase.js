// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9O4rKmd4KRnsB5V09M_-oP5dcdDnDLvI",
  authDomain: "neuro-canvas.firebaseapp.com",
  projectId: "neuro-canvas",
  storageBucket: "neuro-canvas.firebasestorage.app",
  messagingSenderId: "564635627218",
  appId: "1:564635627218:web:4bfab04dd61c38afdc870b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
export { auth };