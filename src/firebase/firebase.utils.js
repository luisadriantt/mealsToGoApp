import * as firebase from "firebase";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByPeNUsnl_0msGzd9uPE7jUKrayyO6R0Y",
  authDomain: "mealstogo-cf00d.firebaseapp.com",
  projectId: "mealstogo-cf00d",
  storageBucket: "mealstogo-cf00d.appspot.com",
  messagingSenderId: "79279256962",
  appId: "1:79279256962:web:0617fec9c3e8bf7c228b9b",
};

firebase.initializeApp(firebaseConfig);
