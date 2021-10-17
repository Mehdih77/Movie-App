import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.not_found_page}>
      <h2>404</h2>
      <p>Oops... Page Not Found!</p>
      <p>Try using the button below to go to main page of the site</p>
      <Link to="/">
        <button>Back to Homa Page</button>
      </Link>
    </div>
  );
}
