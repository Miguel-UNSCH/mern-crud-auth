
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-19b05.firebaseapp.com",
  projectId: "mern-19b05",
  storageBucket: "mern-19b05.appspot.com",
  messagingSenderId: "268268691802",
  appId: "1:268268691802:web:f21e2f7f6799aaa91c5363"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);