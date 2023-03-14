import { Outlet } from 'react-router-dom'

export default () => {
    return(
        <div>
            <h2>Always here!</h2>
            <Outlet />
        </div>
    )
}