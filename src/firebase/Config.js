// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCsdWmrjywemQ0XVYFFA0Yu_SChzvV04Sk",
    authDomain: "user-55cf6.firebaseapp.com",
    projectId: "user-55cf6",
    storageBucket: "user-55cf6.appspot.com",
    messagingSenderId: "1079261624195",
    appId: "1:1079261624195:web:88b4d1cd511eabbdd568b6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
export const auth = getAuth(app);