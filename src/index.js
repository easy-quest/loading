// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqwFMEQ1TvYbjZQ5q_M-6wXSdocky3y8",
  authDomain: "my-first-project-34cbb.firebaseapp.com",
  projectId: "my-first-project-34cbb",
  storageBucket: "my-first-project-34cbb.appspot.com",
  messagingSenderId: "408117790361",
  appId: "1:408117790361:web:bfab3ee167a07cb3819a08",
  measurementId: "G-CBTG0JK3KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);