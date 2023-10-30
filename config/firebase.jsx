import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdRlOzRvjKH03nW3p0V8MsWK5aPhhNM7U",
  authDomain: "markdown-9cce6.firebaseapp.com",
  projectId: "markdown-9cce6",
  storageBucket: "markdown-9cce6.appspot.com",
  messagingSenderId: "1035688435139",
  appId: "1:1035688435139:web:2618daec0c784e0a187176",
  measurementId: "G-G7SQYRBEJE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

googleProvider.setCustomParameters({ prompt: "select_account" });
