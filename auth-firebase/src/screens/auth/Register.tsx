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
                <label className="block" htmlFor="email"><b>Nickname</b></label>
                <input className="border rounded-md w-full p-2" type="text" name="email" id="email" />
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2" type="email" name="email" id="email" />
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="password"><b>Password</b></label>
                <input className="border rounded-md w-full p-2" type="password" name="password" id="password" />
            </div>
            <button className="bg-blue-500 w-full p-2 rounded-md text-white mb-2">Register</button>
            <Link to={'/auth/login'}><p>Already have an account? <b className="text-blue-500">Log in.</b></p></Link>
        </>
    )
}