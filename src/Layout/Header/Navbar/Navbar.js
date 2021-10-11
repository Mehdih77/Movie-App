import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <ul className={`${styles.custom_navbar} navbar-nav me-auto mb-2 mb-lg-0`}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">MOVIES</a>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    DISCOVER
                </a>
                <ul className={`${styles.custom_dropdown} dropdown-menu`} aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" href="#">NOW PLAYING</Link>
                    <Link className="dropdown-item" href="#">TOP RATED</Link>
                    <Link className="dropdown-item" href="#">POPULAR</Link>
                    <Link className="dropdown-item" href="#">UPCOMING</Link>                    
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    GENRES
                </a>
                <ul className={`${styles.custom_dropdown} ${styles.custom_dropdown_genres} dropdown-menu`} aria-labelledby="navbarDropdown">
                    <div>
                        <Link className="dropdown-item" href="#">NOW PLAYING</Link>
                        <Link className="dropdown-item" href="#">TOP RATED</Link>
                        <Link className="dropdown-item" href="#">action</Link>
                        <Link className="dropdown-item" href="#">drama</Link>   
                        <Link className="dropdown-item" href="#">horror</Link>   
                        <Link className="dropdown-item" href="#">comedy</Link>   
                        <Link className="dropdown-item" href="#">comedy</Link>   
                    </div>  
                </ul>
            </li>
        </ul>
    )
}
