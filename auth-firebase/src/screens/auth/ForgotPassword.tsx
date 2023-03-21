import { Link } from "react-router-dom"
import { AlertOctagon } from "lucide-react";

import useFirebase from "../../hooks/useFirebase";


export default () => {

    const {resetPassword} = useFirebase();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //cancel the default action of the event
        e.preventDefault();

        //get the data from the form
        let email = e.currentTarget.email.value;

        //log the data to the console (for testing purposes)
        console.log('Email: %c' + email,'color: blue; font-weight: bold;')

        //send data to firebase
        resetPassword(email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-2">
                <AlertOctagon className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Reset password</h1>
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover dark:bg-slate-800" type="email" name="email" id="email" required/>
            </div>
            <input type="submit" className="bg-blue-500 w-full p-2 rounded-md text-white mb-2 border-2 border-blue-500 focus:outline-none focus:border-blue-800 hover:shadow-input-hover " value="Sign in"></input>
            <Link className="outline-blue-400" to={'/auth/register'}><p>Don't have an account? <b className="text-blue-500">Create an account.</b></p></Link>
        </form>
    )
}