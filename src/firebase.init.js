// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlLExQDfxMLZfH5722XnT2vvKZjc48U88",
    authDomain: "helping-hand-service.firebaseapp.com",
    projectId: "helping-hand-service",
    storageBucket: "helping-hand-service.appspot.com",
    messagingSenderId: "161275666008",
    appId: "1:161275666008:web:532e21a0b4d1766c55b42d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;