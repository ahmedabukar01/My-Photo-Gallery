import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/storage'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsVZjvvUiFCbtDj5Hm6fgNb0We4TbcuQ",
  authDomain: "my-image-gellery.firebaseapp.com",
  projectId: "my-image-gellery",
  storageBucket: "my-image-gellery.appspot.com",
  messagingSenderId: "1055568560941",
  appId: "1:1055568560941:web:d291afcb84c28808b009a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const myStorage = firebase.storage();
const myFirestore = firebase.firestore();

export { myFirestore,myStorage }