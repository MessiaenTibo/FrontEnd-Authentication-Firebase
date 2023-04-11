// TODO: initialize firebase app
import { FirebaseApp, initializeApp } from 'firebase/app';


// TODO: initialize firebase auth
// require('firebase/auth');

import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential, signOut, sendPasswordResetEmail, browserLocalPersistence, setPersistence, onAuthStateChanged, User} from 'firebase/auth';
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


const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

setPersistence(auth, browserLocalPersistence) // whatever happens (login, register, etc.), keep the data in the browser
//can also be to sessionlocalPersistence
//can also be to nonePersistence


export default () => {
    const navigate = useNavigate();

    // onAuthStateChanged(auth, (user: User | null) => {
    //     if (user) {
    //         console.log(user.email)
    //         navigate('/', {state: {email: user.email,uid: user.uid,lastLoginAt: user.metadata.lastSignInTime,createdAt: user.metadata.creationTime,token: ''} })
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });



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
            return("success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            console.log(errorCode)
            return errorCode
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
            return { errorCode: "success", errorMessage: "success"}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage}
        });
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("logged out")
            navigate('/auth/login')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const resetPassword = (email:string) => {
        sendPasswordResetEmail(auth, email).then(() => {
            // Password reset email sent!
            // ..
            console.log("email sent")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage })
            return { errorCode, errorMessage}
        });
    }

    return{
        auth,
        login,
        register,
        logout,
        resetPassword,
    }
}