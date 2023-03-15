// TODO: initialize firebase app
import { FirebaseApp, initializeApp } from 'firebase/app';


// TODO: initialize firebase auth
// require('firebase/auth');

import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential, } from 'firebase/auth';
import { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
//     measurementId: import.meta.env.VITE_measurementId,
// }

const firebaseConfig = {
    apiKey: "AIzaSyD72De_JkY5tzIL89dSPvZwmLmwTCUn58Y",
    authDomain: "authentication-3752d.firebaseapp.com",
    projectId: "authentication-3752d",
    storageBucket: "authentication-3752d.appspot.com",
    messagingSenderId: "491111340973",
    appId: "1:491111340973:web:6889a9f0fc9b029612df24",
    measurementId: "G-H7L9ZR9LCH"
  };

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

console.log({ app })


export default () => {
    const navigate = useNavigate();

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // redirect to profile
            // navigate('/', {replace: true} );
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
        console.log({ nickname, email, password })
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            const user = userCredential.user;
            console.log(user)
            // redirect to profile
            // navigate('/', {replace: true} );
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
        login,
        register,
        // - logout
        // - reset password
    }
}