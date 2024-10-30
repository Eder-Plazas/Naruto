import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIb8mZYMh82pshy6-0tvunA2ikqTS-DzQ",
  authDomain: "favoritos-nar.firebaseapp.com",
  projectId: "favoritos-nar",
  storageBucket: "favoritos-nar.appspot.com",
  messagingSenderId: "122006647226",
  appId: "1:122006647226:web:181b17146cebed2ad16d83"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);