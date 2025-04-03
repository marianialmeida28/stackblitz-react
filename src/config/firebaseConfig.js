// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNXKaOL_dDqR1zLeEbFF3QREOXwYOGH3I",
  authDomain: "react-login-86c52.firebaseapp.com",
  projectId: "react-login-86c52",
  storageBucket: "react-login-86c52.firebasestorage.app",
  messagingSenderId: "380189546521",
  appId: "1:380189546521:web:1ec71b3a932c26370a3288",
  measurementId: "G-06Y99CRWH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };