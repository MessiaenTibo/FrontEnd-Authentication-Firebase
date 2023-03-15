import { Outlet } from 'react-router-dom'

export default () => {
    return(
        <div className='w-10/12 xsm:w-96 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <Outlet />
        </div>
    )
}