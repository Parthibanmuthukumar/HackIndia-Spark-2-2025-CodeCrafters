import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCoKclGf2Dtk9rG9jOSbSLttsdDkdGw8eM",
  authDomain: "to-dolist-eb729.firebaseapp.com",
  projectId: "to-dolist-eb729",
  storageBucket: "to-dolist-eb729.firebasestorage.app",
  messagingSenderId: "879170885191",
  appId: "1:879170885191:web:daa298f56c12348e3b0362",
  measurementId: "G-L7XHZ7GRW6"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;