import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from "./components/layout/Footer";
const Layout = () => {
    return (
        <div className=' bg-slate-50'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout