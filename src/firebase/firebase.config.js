// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA5sO6g2RyCNXOKdvsOVXsbSvN8CexZkk",
    authDomain: "task-manager-be017.firebaseapp.com",
    projectId: "task-manager-be017",
    storageBucket: "task-manager-be017.appspot.com",
    messagingSenderId: "898802744067",
    appId: "1:898802744067:web:e507bcc02931bab58e4736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;