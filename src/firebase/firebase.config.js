// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtGh71kHnMltv1KOn9uJSaIkVY2yhKrmc",
    authDomain: "build-your-web.firebaseapp.com",
    projectId: "build-your-web",
    storageBucket: "build-your-web.appspot.com",
    messagingSenderId: "1044179500656",
    appId: "1:1044179500656:web:425bc8aaf5a40167387eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app