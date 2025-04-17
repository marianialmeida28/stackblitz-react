
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNXKaOL_dDqR1zLeEbFF3QREOXwYOGH3I",
  authDomain: "react-login-86c52.firebaseapp.com",
  projectId: "react-login-86c52",
  storageBucket: "react-login-86c52.firebasestorage.app",
  messagingSenderId: "380189546521",
  appId: "1:380189546521:web:1ec71b3a932c26370a3288",
  measurementId: "G-06Y99CRWH1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };