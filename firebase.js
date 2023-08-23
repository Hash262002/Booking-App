// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFireStore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTU-8-I5gFt3XSzMZP-fdyRxjytESpYRU",
  authDomain: "booking-project-dea02.firebaseapp.com",
  projectId: "booking-project-dea02",
  storageBucket: "booking-project-dea02.appspot.com",
  messagingSenderId: "385534086215",
  appId: "1:385534086215:web:56ea8e199a7e6b1a36b562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFireStore();
export {auth,db};