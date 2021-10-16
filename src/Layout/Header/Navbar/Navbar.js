import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenresType, getGenresType } from '../../../Redux/genreSlice';
import styles from './Navbar.module.css';

export default function Navbar() {

    const genresType = useSelector(getGenresType);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenresType());
    }, [dispatch])

    const showGenresList = genresType.map(genre => (
        <Link to={`/genre/${genre.name}/${genre.id}`} key={genre.id} className="dropdown-item" href="!#">{genre.name}</Link>
    ))

    return (
        <ul className={`${styles.custom_navbar} navbar-nav me-auto mb-2 mb-lg-0`}>
            <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link to='/pricing' className="nav-link" href="/pricing">Pricing Plans</Link>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    DISCOVER
                </a>
                <ul className={`${styles.custom_dropdown} dropdown-menu`} aria-labelledby="navbarDropdown">
                    <Link to='/nowplaying' className="dropdown-item" href="/nowplaying">NOW PLAYING</Link>
                    <Link to='/toprated' className="dropdown-item" href="/toprated">TOP RATED</Link>
                    <Link to='/popular' className="dropdown-item" href="/popular">POPULAR</Link>
                    <Link to='/upcoming' className="dropdown-item" href="/upcoming">UPCOMING</Link>                    
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    GENRES
                </a>
                <ul className={`${styles.custom_dropdown} ${styles.custom_dropdown_genres} dropdown-menu`} aria-labelledby="navbarDropdown">
                    <div>
                        {showGenresList}   
                    </div>  
                </ul>
            </li>
        </ul>
    )
}
