// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkUKrNmQMbSrZFCp8J1G-LnTeaYL9pl7s",
  authDomain: "netflixgpt-63d69.firebaseapp.com",
  projectId: "netflixgpt-63d69",
  storageBucket: "netflixgpt-63d69.appspot.com",
  messagingSenderId: "1016685646643",
  appId: "1:1016685646643:web:ff83101057df28fac8e446",
  measurementId: "G-LK4DZPQGLC"
}; 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();