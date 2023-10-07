// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfeoDyI3a_UuglWbwNj3idWpa48ff2rUQ",
  authDomain: "nasa-space-apps-7.firebaseapp.com",
  databaseURL: "https://nasa-space-apps-7-default-rtdb.firebaseio.com",
  projectId: "nasa-space-apps-7",
  storageBucket: "nasa-space-apps-7.appspot.com",
  messagingSenderId: "864770965990",
  appId: "1:864770965990:web:05abbaf754bd7c39abd627",
  measurementId: "G-S81GSR3F8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };