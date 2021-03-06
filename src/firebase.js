// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, collection, getDocs, addDoc, Timestamp, query, where, onSnapshot} from "firebase/firestore";
import {StyledFirebaseAuth} from "react-firebaseui";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcq_zzJ4Y0jeUIDCqzmT4U0-1kBofkaps",
    authDomain: "frcscouter-2239.firebaseapp.com",
    projectId: "frcscouter-2239",
    storageBucket: "frcscouter-2239.appspot.com",
    messagingSenderId: "737522006626",
    appId: "1:737522006626:web:a0a0923ab7f33a70d8ef3b",
    measurementId: "G-9VVLR48SCP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => null);

export {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    query,
    where,
    onSnapshot,
    Timestamp,
    StyledFirebaseAuth,
    firebase,
};
