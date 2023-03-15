import { Key } from "lucide-react";

import { Link } from "react-router-dom"


export default () => {
    return(
        <div className='w-128 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div className="flex items-center mb-2">
                <Key className="w-12 h-12 p-2 text-blue-500 bg-blue-300 inline rounded-full m-2 ml-0" />
                <h1 className="text-4xl inline">Welcome</h1>
            </div>
            <div className="mb-2">
                <p className="inline">You are logged in with the emailaddress </p>
                <p className="inline"><b>Tibo.messiaen@howest.be</b>.</p>
            </div>
            <div className="mb-2">
                <p>The uid is 0BfzxfqCXsbqz61CGZBQpI1khEml.</p>
                <p>Last login: Mon, 21 Mar 2022 08:55:06 GMT</p>
            </div>
            <div className="mb-2">
                <p>Token to access bakcend services:</p>
                <p className="overflow-x-scroll blur-sm hover:blur-none"><b>0BfzxfqCXsbqz61CGZBQpI1khEml0BfzxfqCXsbqz61CGZBQpI1khEml0BfzxfqCXsbqz61CGZBQpI1khEml</b></p>
            </div>
            <Link className="text-end p-1" to={'/auth/login'}><p>Are you dont here? Don't forget to logout. <b className="bg-blue-500 w-full p-2 rounded-md text-white mb-2">Logout</b></p></Link>
        </div>
    )
}