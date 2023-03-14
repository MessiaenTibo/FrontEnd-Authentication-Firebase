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
                <input className="border rounded-md w-full p-2" type="email" name="email" id="email" />
            </div>
            <button className="bg-blue-500 w-full p-2 rounded-md text-white mb-2">Sign in</button>
            <Link to={'/auth/register'}><p>Don't have an account? <b className="text-blue-500">Create an account.</b></p></Link>
        </>
    )
}