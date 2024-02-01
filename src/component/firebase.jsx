// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8V3NDaT-RD0-SL2w3nHdSsLOIDaURmGQ",
  authDomain: "inyene-650ab.firebaseapp.com",
  projectId: "inyene-650ab",
  storageBucket: "inyene-650ab.appspot.com",
  messagingSenderId: "1003428689151",
  appId: "1:1003428689151:web:3fd346c92c09eeb5a2c8ca",
  measurementId: "G-5GEYZRBMXM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

