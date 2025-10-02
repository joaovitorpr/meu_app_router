import { Link, useLocation } from 'react-router-dom';


function Footer() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
   return(
    <nav>
        <div>
            footer
        </div>
        <div>
            <Link to='/'
            className={`transition-colors   ${
                isActive('/')
                ? 'hover:text-blue-400 hover:underline'
                : 'hover:text-blue-400 hover:underline'
            }`}
            >Home</Link>
            <Link to='/sobre'
            
            ></Link>
        </div>
    </nav>
   )
}

export default Footer;