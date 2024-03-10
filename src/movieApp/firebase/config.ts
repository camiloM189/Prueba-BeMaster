// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAois_Pwp3XCGcTb5-pPwux1DDlauafngI",
  authDomain: "prueba-bemaster-2fd77.firebaseapp.com",
  projectId: "prueba-bemaster-2fd77",
  storageBucket: "prueba-bemaster-2fd77.appspot.com",
  messagingSenderId: "286780720652",
  appId: "1:286780720652:web:0c5267a7b64b98c0e55029",
  measurementId: "G-XR1HEYC2T7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
