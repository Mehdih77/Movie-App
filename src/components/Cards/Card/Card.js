import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({img,name,year,star}) {
    return (
        <div className={styles.card_wrapper}>
            <Link to='/'>
                <img src={img} alt="movie" />
                <div className={styles.card_content}>
                    <p>{name}</p>
                    <div className={styles.card_content_bottom}>
                        <span>{year}</span>
                        <span><i className="fas fa-star"></i> {star}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
