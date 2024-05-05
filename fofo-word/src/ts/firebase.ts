// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMl9e0jA-xawnkzMB3X3CEiN9KUqbnXdk",
  authDomain: "fofowordcount.firebaseapp.com",
  projectId: "fofowordcount",
  storageBucket: "fofowordcount.appspot.com",
  messagingSenderId: "1055768082414",
  appId: "1:1055768082414:web:6da27346b0bd1b044e40ff",
  measurementId: "G-9W2QKJZZ8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, analytics, db };


