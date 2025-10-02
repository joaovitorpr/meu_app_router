import { Link, useLocation } from 'react-router-dom';


function Footer() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
   return(
    <nav>
        <div>
            footer
        </div>
    </nav>
   )
}

export default Footer;