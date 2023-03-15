// TODO: initialize firebase app
import { FirebaseApp, initializeApp } from 'firebase/app';
// TODO: initialize firebase auth
require('firebase/auth');

import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apikey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
}

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

console.log({ app })


export default () => {
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage }
        });
    }

    const register = (nickname: string, email: string, password: string) => {
        return createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential: UserCredential) => {
            const user = userCredential.user;
            console.log(user)
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage }
        });
    }

    return{
        // - login
        login,
        register,
        // - logout
        // - register
        // - reset password
    }
}