import { Key } from "lucide-react";

import { Link } from "react-router-dom"


export default () => {
    return(
        <form>
            <div className="flex items-center mb-2">
                <Key className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Sign in</h1>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer" type="email" name="email" id="email" required/>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="password"><b>Password</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer" type="password" name="password" id="password" required/>
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