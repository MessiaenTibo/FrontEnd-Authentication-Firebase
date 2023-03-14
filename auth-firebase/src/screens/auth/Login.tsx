import { Key } from "lucide-react";

import { Link } from "react-router-dom"


export default () => {
    return(
        <>
            <div className="">
                <Key className="w-16 h-16 text-red-500 bg-red-300 inline" />
                <h1 className="text-4xl inline">Sign in</h1>
            </div>
            <div className="">
                <label className="block" htmlFor="email"><b>Email address</b></label>
                <input className="border" type="email" name="email" id="email" />
            </div>
            <div>
                <label className="block" htmlFor="password"><b>Password</b></label>
                <input className="border" type="password" name="password" id="password" />
            </div>
            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remeber">Remeber me (not yet implemented)</label>
            </div>
            <button className="bg-red-500 w-full p-2 rounded-md text-white">Sign in</button>
            <Link className="text-slate-400 text-center" to={'/auth/forgot-password'}><p>Forgot password?</p></Link>
            <Link to={'/auth/register'}><p>Don't have an account? <b className="text-red-500">Create an account.</b></p></Link>
        </>
    )
}