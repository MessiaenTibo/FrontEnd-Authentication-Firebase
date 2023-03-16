import { Frown } from "lucide-react";

import { Link } from "react-router-dom"

export default () => {

    return(
        <div className='w-10/12 xsm:w-96 md:w-128 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div className="flex items-center mb-2">
                <Frown className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">404 Page not found</h1>
            </div>
            <div className="mb-2">
                <p className="inline">The page you are looking for doesn't exist!</p>
            </div>
            <div className="mb-2">
                <Link className="outline-blue-400" to={'/auth/register'}><p className="text-neutral-400">Are you looking to create an account? <b className="text-blue-500">Create an account here!</b></p></Link>
                <Link className="outline-blue-400" to={'/auth/login'}><p className="text-neutral-400">Are you looking to login? <b className="text-blue-500">Login here!</b></p></Link>
            </div>
        </div>
    )
}