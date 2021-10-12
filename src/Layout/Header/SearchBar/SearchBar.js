import { Link, useHistory } from 'react-router-dom';
import styles from './SearchBar.module.css';

export default function SearchBar() {

    const history = useHistory();

    const handleSearchByKeyword = (e) => {
        e.preventDefault();
        history.push('/searched')
    }

    return (
        <form className={`${styles.search_bar}`}>
            <div>
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
                <button onClick={handleSearchByKeyword}><i className="fas fa-search"></i></button>
            </div>
            <Link to='/dashboard' href='/dashboard'>
                <button className={`${styles.user_btn} btn`} type="submit">
                    <i className="fas fa-user"></i>
                </button>
            </Link>
        </form>
    )
}
