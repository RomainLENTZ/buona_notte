// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD0dAE5pBASc5Do8qsHhjZ2bAVP3mWr4-Q",
    authDomain: "buona-notte-29723.firebaseapp.com",
    projectId: "buona-notte-29723",
    storageBucket: "buona-notte-29723.firebasestorage.app",
    messagingSenderId: "398074955366",
    appId: "1:398074955366:web:d11c64a592e1cab7dbcfa7",
    measurementId: "G-ZG5CK5BG70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

signInAnonymously(auth)
    .then(() => console.log("Authentifié anonymement !"))
    .catch((error) => console.error("Erreur d'authentification :", error));

export { db, auth };