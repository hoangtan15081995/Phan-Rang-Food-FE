import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "phan-rang-go-food.firebaseapp.com",
  projectId: "phan-rang-go-food",
  storageBucket: "phan-rang-go-food.appspot.com",
  messagingSenderId: "340140143949",
  appId: "1:340140143949:web:f92057b69c504eaf41b304",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth()



