// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9dg2qsBC5EGWYPk6MW_JXqrwXNn5ThUM",
  authDomain: "real-estate-project-c2b82.firebaseapp.com",
  projectId: "real-estate-project-c2b82",
  storageBucket: "real-estate-project-c2b82.appspot.com",
  messagingSenderId: "682441889698",
  appId: "1:682441889698:web:0e51bccc9287d6bf18c4fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;