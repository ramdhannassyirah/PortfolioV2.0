import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnGND7deiIqO58Lu8o-WIsHdoZRK0bSds",
  authDomain: "test-d1383.firebaseapp.com",
  projectId: "test-d1383",
  storageBucket: "test-d1383.appspot.com",
  messagingSenderId: "1038953775928",
  appId: "1:1038953775928:web:f5cfa0039986deef12b7cd",
  measurementId: "G-7F58EWNHGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
