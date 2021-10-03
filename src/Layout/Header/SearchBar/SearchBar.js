import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <form className={`${styles.search_bar}`}>
            <div>
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
                <button><i className="fas fa-search"></i></button>
            </div>
            <button className={`${styles.user_btn} btn`} type="submit">
                <i className="fas fa-user"></i>
            </button>
        </form>
    )
}
