// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiBugmcUWb5hBMOEKa1Gz6_MgPhiKn42k",
  authDomain: "netflixgpt-e2cf9.firebaseapp.com",
  projectId: "netflixgpt-e2cf9",
  storageBucket: "netflixgpt-e2cf9.appspot.com",
  messagingSenderId: "716975825953",
  appId: "1:716975825953:web:46fbce4380e7fad8baef60",
  measurementId: "G-6TM2MCJX0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
