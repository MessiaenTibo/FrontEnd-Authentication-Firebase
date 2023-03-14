import { Link } from "react-router-dom"
import { AlertOctagon } from "lucide-react";


export default () => {
    return(
        <>
            <div className="flex items-center mb-2">
                <AlertOctagon className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Reset password</h1>
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="email"><b>Email address</b></label>
                <input className="border rounded-md w-full p-2 focus:outline-none focus:border-blue-400 hover:shadow-input-hover" type="email" name="email" id="email" required/>
            </div>
            <input type="submit" className="bg-blue-500 w-full p-2 rounded-md text-white mb-2 border-2 border-blue-500 focus:outline-none focus:border-blue-800 hover:shadow-input-hover" value="Sign in"></input>
            <Link className="outline-blue-400" to={'/auth/register'}><p>Don't have an account? <b className="text-blue-500">Create an account.</b></p></Link>
        </>
    )
}