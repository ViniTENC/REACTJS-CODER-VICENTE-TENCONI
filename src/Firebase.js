import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB72tNt0GpflMGmzBl792oXgNuWK-DPt54",
  authDomain: "proyecto-coder-react-7802e.firebaseapp.com",
  projectId: "proyecto-coder-react-7802e",
  storageBucket: "proyecto-coder-react-7802e.appspot.com",
  messagingSenderId: "662738555798",
  appId: "1:662738555798:web:d107a874e2f535fa9183b7",
  measurementId: "G-FR5N7D5DJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)