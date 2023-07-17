import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className=' h-14 w-full bg-pink-400'>Header</div>
            <Outlet />
            <div className=' h-14 w-full bg-pink-400'>Footer</div>
        </div>
    )
}
export default Layout