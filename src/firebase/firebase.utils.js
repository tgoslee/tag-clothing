import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBR9Qj_D3jyxTm2EeDZmbry4qrP590GLn4",
    authDomain: "tag-clothing.firebaseapp.com",
    databaseURL: "https://tag-clothing.firebaseio.com",
    projectId: "tag-clothing",
    storageBucket: "tag-clothing.appspot.com",
    messagingSenderId: "563497619534",
    appId: "1:563497619534:web:4cd50e9199cb3b1917b31f",
    measurementId: "G-WDVJN2FB0K"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
