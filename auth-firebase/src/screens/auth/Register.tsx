import { CalendarCheck } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

import useFirebase from "../../hooks/useFirebase";


export default () => {
    let [email, setEmail] = useState('');
    let [nickname, setNickname] = useState('');
    let [password, setPassword] = useState('');

    let [error, setError] = useState('none');
    let [errorMessages, setErrorMessage] = useState('none');

    const {login, register} = useFirebase();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //cancel the default action of the event
        e.preventDefault();

        //get the data from the form
        email = e.currentTarget.email.value;
        nickname = e.currentTarget.nickname.value;
        password = e.currentTarget.password.value;

        //set the state
        setEmail(email);
        setNickname(nickname);
        setPassword(password);

        //log the data to the console (for testing purposes)
        console.log('Email: %c' + email,'color: blue; font-weight: bold;')
        console.log('Nickname: %c' + nickname,'color: blue; font-weight: bold;')
        console.log('Password: %c' + password,'color: blue; font-weight: bold;');

        //send data to firebase
        const registerState = register(nickname, email, password);
        registerState.then(({errorCode, errorMessage}) => {
            setErrorMessage(errorMessage);
            console.log(errorCode)
            if(errorCode == "success"){
                console.log("Logged in");
                error = "none";
                setError(error);
            }
            else if(errorCode == "auth/weak-password"){
                console.log("Weak password");
                //Give password input focus and red border
                error = "password";
                setError(error);
            }
            else if(errorCode == "auth/email-already-in-use" ){
                console.log("Email already in use");
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
                <CalendarCheck className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Register</h1>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="nickname"><b>Nickname</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="text" name="nickname" id="nickname" required/>
            </div>
            <div className="mb-2">
                { error == "email" ? <label className="block cursor-pointer text-red-500" htmlFor="email"><b>Email address</b></label> : <label className="block cursor-pointer" htmlFor="email"><b>Email address</b></label> }
                { error == "email" ? <input className="border rounded-md w-full p-2 focus:outline-none focus:border-red-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800 border-red-400" type="email" name="email" id="email" required/> : <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="email" name="email" id="email" required/>}
                { error == "email" ? <p className="text-red-500">{errorMessages}</p> : <></> }
            </div>
            <div className="mb-2">
                { error == "password" ? <label className="block cursor-pointer text-red-500" htmlFor="password"><b>Password</b></label> : <label className="block cursor-pointer" htmlFor="password"><b>Password</b></label> }
                { error == "password" ? <input className="border rounded-md w-full p-2 focus:outline-none focus:border-red-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800 border-red-400" type="password" name="password" id="password" required/> : <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer dark:bg-slate-800" type="password" name="password" id="password" required/>}
                { error == "password" ? <p className="text-red-500">{errorMessages}</p> : <></> }
            </div>
            <input type="submit" className="bg-blue-500 w-full p-2 rounded-md text-white mb-2 border-2 border-blue-500 focus:outline-none focus:border-blue-800 hover:shadow-input-hover cursor-pointer" value="Register"></input>
            <Link className="outline-blue-400" to={'/auth/login'}><p>Already have an account? <b className="text-blue-500">Log in.</b></p></Link>
        </form>
    )
}