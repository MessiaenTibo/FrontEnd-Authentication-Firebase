import { Key } from "lucide-react";

import { Link, Navigate } from "react-router-dom"

import useFirebase from "../hooks/useFirebase";

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export default () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    let { email, uid, lastLoginAt, createdAt, token  } = state || {};
    console.log(state)

    const { auth, logout } = useFirebase();

    const user = auth.currentUser;
    console.log(user)

    email = user?.email;
    uid = user?.uid;
    lastLoginAt = user?.metadata.lastSignInTime;
    createdAt = user?.metadata.creationTime;
    token = user?.getIdToken();

    
    //redirect to login if not logged in
    useEffect(() => {
        if(!email) navigate('/auth/login');
    }, [])

    const handleClick = () => {
        logout();
    }

    return(
        <div className='w-10/12 xsm:w-96 md:w-128 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div className="flex items-center mb-2">
                <Key className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Welcome</h1>
            </div>
            <div className="mb-2">
                <p className="inline">You are logged in with the emailaddress </p>
                <p className="inline"><b>{email}</b>.</p>
            </div>
            <div className="mb-2">
                <p>The uid is {uid}.</p>
                <p>Last login: {lastLoginAt}</p>
                <p>Created at: {createdAt}</p>
            </div>
            <div className="mb-2">
                <p>Token to access bakcend services:</p>
                <p className="overflow-x-scroll blur-sm hover:blur-none whitespace-nowrap"><b>{token}</b></p>
            </div>
            <button className="text-end p-1" onClick={handleClick}><p>Are you dont here? Don't forget to logout. <b className="bg-blue-500 w-full p-2 rounded-md text-white mb-2">Logout</b></p></button>
        </div>
    )
}