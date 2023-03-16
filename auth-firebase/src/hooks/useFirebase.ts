// TODO: initialize firebase app
import { FirebaseApp, initializeApp } from 'firebase/app';


// TODO: initialize firebase auth
// require('firebase/auth');

import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
}

// const firebaseConfig = {
//     apiKey: "AIzaSyD72De_JkY5tzIL89dSPvZwmLmwTCUn58Y",
//     authDomain: "authentication-3752d.firebaseapp.com",
//     projectId: "authentication-3752d",
//     storageBucket: "authentication-3752d.appspot.com",
//     messagingSenderId: "491111340973",
//     appId: "1:491111340973:web:6889a9f0fc9b029612df24",
//     measurementId: "G-H7L9ZR9LCH"
//   };

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);


export default () => {
    const navigate = useNavigate();


    const login = (emailLogin: string, password: string) => {
        return signInWithEmailAndPassword(auth, emailLogin, password)
        .then((userCredential: UserCredential) => {
            // Signed in
            const user = userCredential.user;

            // redirect to profile
            let email = user.email;
            let uid = user.uid;
            let lastLoginAt = user.metadata.lastSignInTime;
            let createdAt = user.metadata.creationTime;
            let token = ''
            user.getIdToken().then((idToken) => {
                token = idToken.toString();
                navigate('/', {state: {email,uid,lastLoginAt,createdAt,token} });
            }).catch((error) => {
                console.log(error)
                navigate('/', {state: {email,uid,lastLoginAt,createdAt,token} });
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage }
        });
    }

    const register = (nickname: string, email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            const user = userCredential.user;

            // redirect to profile
            let email = user.email;
            let uid = user.uid;
            let lastLoginAt = user.metadata.lastSignInTime;
            let createdAt = user.metadata.creationTime;
            let token = ''
            user.getIdToken().then((idToken) => {
                token = idToken.toString();
                navigate('/', {state: {email,uid,lastLoginAt,createdAt,token} });
            }).catch((error) => {
                console.log(error)
                navigate('/', {state: {email,uid,lastLoginAt,createdAt,token} });
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage }
        });
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    return{
        login,
        register,
        logout,
        // - reset password
    }
}