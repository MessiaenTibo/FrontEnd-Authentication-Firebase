import { Component, Key } from "lucide-react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom"

import useFirebase from "../../hooks/useFirebase";


export default () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [remember, setRemember] = useState(false);

    let [error, setError] = useState('none');

    const {login, register} = useFirebase();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //cancel the default action of the event
        e.preventDefault();

        //get the data from the form
        email = e.currentTarget.email.value;
        password = e.currentTarget.password.value;
        remember = e.currentTarget.remember.checked;

        //set the state
        setEmail(email);
        setPassword(password);
        setRemember(remember);

        //log the data to the console (for testing purposes)
        console.log('Email: %c' + email,'color: blue; font-weight: bold;')
        console.log('Password: %c' + password,'color: blue; font-weight: bold;');
        console.log('Remember state: %c' + remember,'color: blue; font-weight: bold;');

        //send data to firebase
        const loginState = login(email, password);
        loginState.then((value) => {
            console.log(value)
            if(value == "success"){
                console.log("Logged in");
                error = "none";
                setError(error);
            }
            else if(value == "auth/wrong-password"){
                console.log("Wrong password");
                //Give password input focus and red border
                error = "password";
                setError(error);
            }
            else if(value == "auth/user-not-found" ){
                console.log("Invalid email");
                //Give email input focus and red border
                error = "email"
                setError(error);
            }
            else{
                console.log("Unknown error")
                //reset the form
                error = "unkown"
                setError(error);
            }
        })
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-2">
                <Key className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Sign in</h1>
            </div>

            {error === "unkown" ? <p className="text-red-600">Unknown error</p> : null}
            {error === "email" ? <p className="text-red-600">Invalid email</p> : null}
            {error === "password" ? <p className="text-red-600">Wrong password</p> : null}

            <div className="mb-2">
                {error === "email" ? <label className="block cursor-pointer text-red-600" htmlFor="email"><b>Email address</b></label> : <label className="block cursor-pointer" htmlFor="email"><b>Email address</b></label>}
                {error === "email" ? <input className="border border-red-600 rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="email" name="email" id="email" required autoFocus/> : <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="email" name="email" id="email" required/>}
            </div>
            <div className="mb-2">
                {error === "password" ? <label className="block cursor-pointer text-red-600" htmlFor="password"><b>Password</b></label> : <label className="block cursor-pointer" htmlFor="password"><b>Password</b></label>}
                {error === "password" ? <input className="border border-red-600 rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="password" name="password" id="password" required autoFocus/> : <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="password" name="password" id="password" required/>}
            </div>
            <div className="mb-2">
                <input className="mr-2 focus:outline-none border focus:border-blue-4OO cursor-pointer" type="checkbox" name="remember" id="remember" />
                <label className="cursor-pointer" htmlFor="remember">Remeber me</label>
            </div>
            <input type="submit" className="bg-blue-500 w-full p-2 rounded-md text-white mb-2 border-2 border-blue-500 focus:outline-none focus:border-blue-800 hover:shadow-input-hover cursor-pointer" value="Sign in"></input>
            <Link className="text-slate-400 text-center focus:text-blue-600 outline-blue-400" to={'/auth/forgot-password'}><p>Forgot password?</p></Link>
            <Link className="outline-blue-400" to={'/auth/register'}><p>Don't have an account? <b className="text-blue-500">Create an account.</b></p></Link>
        </form>
    )
}