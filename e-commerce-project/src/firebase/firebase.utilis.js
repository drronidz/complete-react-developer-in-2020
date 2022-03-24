import firebase from "firebase/compat/app";
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey : "AIzaSyD5wIrctioGHe_Nz76fDNJGLEZyzGwgNEc" ,
    authDomain : "crown-clothing-7ea58.firebaseapp.com" ,
    projectId : "crown-clothing-7ea58" ,
    storageBucket : "crown-clothing-7ea58.appspot.com" ,
    messagingSenderId : "123347148230" ,
    appId : "1:123347148230:web:ba8f594b47ddde0aeaa6c7"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase