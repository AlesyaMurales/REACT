import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCr0PdPWV5P94OJKNjgITYMiSkvytglP8U",
    authDomain: "fir-react-1932f.firebaseapp.com",
    databaseURL: "https://fir-react-1932f-default-rtdb.firebaseio.com",
    projectId: "fir-react-1932f",
    storageBucket: "fir-react-1932f.appspot.com",
    messagingSenderId: "457190363607",
    appId: "1:457190363607:web:6fcc2783bd464603dc3b92"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();