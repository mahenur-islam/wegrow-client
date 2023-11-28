// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvjI_T5_9m7BuJ9b0DTVr4LaqNV0M44gw",
  authDomain: "wegrow-auth-client.firebaseapp.com",
  projectId: "wegrow-auth-client",
  storageBucket: "wegrow-auth-client.appspot.com",
  messagingSenderId: "342446895858",
  appId: "1:342446895858:web:341e2bf61a19221094d66b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);