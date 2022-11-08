import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4aKZfTFfw8Xrguye21yjFzdfNFi0OBi4",
  authDomain: "devlinks-da942.firebaseapp.com",
  projectId: "devlinks-da942",
  storageBucket: "devlinks-da942.appspot.com",
  messagingSenderId: "690044750729",
  appId: "1:690044750729:web:efa73c42f4380bc532af58",
  measurementId: "G-VC1NXW7KLQ",
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };
