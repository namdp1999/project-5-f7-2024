import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLX6l_8f778-lRDqXILCOWbtWw2nLDg6w",
  authDomain: "project-5-209e4.firebaseapp.com",
  databaseURL: "https://project-5-209e4-default-rtdb.firebaseio.com",
  projectId: "project-5-209e4",
  storageBucket: "project-5-209e4.firebasestorage.app",
  messagingSenderId: "189156599126",
  appId: "1:189156599126:web:e1198638a71810886be2f7"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);