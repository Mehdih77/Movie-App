import SearchBar from './SearchBar/SearchBar';
import {Link} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mx-3">
                    <Link className="navbar-brand" to='/' href="/">
                        <img className='img-fluid' src="/images/header-logo.png" alt="Movie-App Logo" />
                    </Link>
                    <button
                        className={`${styles.custom_navbar_toggler} navbar-toggler`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className={`${styles.navbar_icon} fas fa-bars`}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Navbar/>
                        <SearchBar/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
