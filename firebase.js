// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfx989EdiSD836EYnlmRUxrayK4yJlT0w",
    authDomain: "twitter-clone-fb92d.firebaseapp.com",
    projectId: "twitter-clone-fb92d",
    storageBucket: "twitter-clone-fb92d.appspot.com",
    messagingSenderId: "566214584025",
    appId: "1:566214584025:web:bd65eac198170e8abb40c8"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };