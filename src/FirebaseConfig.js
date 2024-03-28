// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvS3nPQaIemeOtaRG9M7sK_UA4NsiFyTY",
  authDomain: "talwincsschatapp.firebaseapp.com",
  projectId: "talwincsschatapp",
  storageBucket: "talwincsschatapp.appspot.com",
  messagingSenderId: "217322228577",
  appId: "1:217322228577:web:51f59ac7577beea81ad320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig