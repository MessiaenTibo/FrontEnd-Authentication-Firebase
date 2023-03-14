import { Key } from "lucide-react";

import { Link } from "react-router-dom"


export default () => {
    return(
        <>
            <div className="flex items-center mb-2">
                <Key className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Sign in</h1>
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2" type="email" name="email" id="email" />
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="password"><b>Password</b></label>
                <input className="border rounded-md w-full p-2" type="password" name="password" id="password" />
            </div>
            <div className="mb-2">
                <input className="mr-2" type="checkbox" name="remember" id="remember" />
                <label htmlFor="remeber">Remeber me (not yet implemented)</label>
            </div>
            <button className="bg-blue-500 w-full p-2 rounded-md text-white mb-2">Sign in</button>
            <Link className="text-slate-400 text-center" to={'/auth/forgot-password'}><p>Forgot password?</p></Link>
            <Link to={'/auth/register'}><p>Don't have an account? <b className="text-blue-500">Create an account.</b></p></Link>
        </>
    )
}