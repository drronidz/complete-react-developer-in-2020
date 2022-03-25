import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey : "AIzaSyD5wIrctioGHe_Nz76fDNJGLEZyzGwgNEc" ,
    authDomain : "crown-clothing-7ea58.firebaseapp.com" ,
    projectId : "crown-clothing-7ea58" ,
    storageBucket : "crown-clothing-7ea58.appspot.com" ,
    messagingSenderId : "123347148230" ,
    appId : "1:123347148230:web:ba8f594b47ddde0aeaa6c7"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;