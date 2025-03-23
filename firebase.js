// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEiPg3LgSYt8HC1nE2CBw98GWk7Jq6Ow",
  authDomain: "direct2dulles.firebaseapp.com",
  projectId: "direct2dulles",
  storageBucket: "direct2dulles.firebasestorage.app",
  messagingSenderId: "1099006872042",
  appId: "1:1099006872042:web:df2ecc5af2b23f46620a93",
  measurementId: "G-Y8Z06YW67W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics in client-side only
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };