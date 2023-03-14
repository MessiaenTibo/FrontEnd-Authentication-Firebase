import { CalendarCheck } from "lucide-react";

import { Link } from "react-router-dom"


export default () => {
    return(
        <>
            <div className="flex items-center mb-2">
                <CalendarCheck className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Register</h1>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="nickname"><b>Nickname</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer" type="text" name="nickname" id="nickname" required/>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer" type="email" name="email" id="email" required/>
            </div>
            <div className="mb-2">
                <label className="block cursor-pointer" htmlFor="password"><b>Password</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover cursor-pointer" type="password" name="password" id="password" required/>
            </div>
            <input type="submit" className="bg-blue-500 w-full p-2 rounded-md text-white mb-2 border-2 border-blue-500 focus:outline-none focus:border-blue-800 hover:shadow-input-hover cursor-pointer" value="Register"></input>
            <Link className="outline-blue-400" to={'/auth/login'}><p>Already have an account? <b className="text-blue-500">Log in.</b></p></Link>
        </>
    )
}