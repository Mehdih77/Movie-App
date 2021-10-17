import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  // use query with params in Discover/MovieBySearchPage
  const handleSearchByKeyword = (e) => {
    e.preventDefault();
    if (query.length > 0) {
        setError(false);
      history.push(`/searched/${query}`);
      setQuery("");
    } else {
      setError(true);
    }
  };

  return (
    <form className={`${styles.search_bar}`}>
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={error ? `${styles.input_error} form-control me-2` : "form-control me-2"}
          accessKey="q"
          type="search"
          placeholder={error ? "Please Enter Something" : "Search"}
          aria-label="Search"
        />
        <button onClick={handleSearchByKeyword}>
          <i className="fas fa-search"></i>
        </button>
        {query.length < 1 && <kbd className={styles.access_key}>Alt + q</kbd>}
      </div>
      <Link to="/dashboard" href="/dashboard">
        <button className={`${styles.user_btn} btn`} type="submit">
          <i className="fas fa-user"></i>
        </button>
      </Link>
    </form>
  );
}
