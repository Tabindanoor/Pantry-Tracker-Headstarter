// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGai-isO03V0ZSZFDk1X25CWUAgTAGv-I",
  authDomain: "pantry-tracker-8b15c.firebaseapp.com",
  projectId: "pantry-tracker-8b15c",
  storageBucket: "pantry-tracker-8b15c.appspot.com",
  messagingSenderId: "685466939542",
  appId: "1:685466939542:web:c53f6acb1549be215a12b7",
  measurementId: "G-B8XF5GEG2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}


// const analytics = getAnalytics(app);