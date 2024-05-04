
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from "firebase/auth";
import firebase from 'firebase-admin'





const firebaseConfig = {
  apiKey: "AIzaSyDE1-msxUbNCxq2lAzmXBwXzSJzDtkn5bM",
  authDomain: "topop-a1420.firebaseapp.com",
  projectId: "topop-a1420",
  storageBucket: "topop-a1420.appspot.com",
  messagingSenderId: "1052307933883",
  appId: "1:1052307933883:web:10272d34bb668012fcb79e",
  measurementId: "G-CP3V573T5H"
};


const fireabseapp = initializeApp(firebaseConfig);
const auth = getAuth(fireabseapp);



export  {fireabseapp,auth,firebase};