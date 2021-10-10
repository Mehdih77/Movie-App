import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({responsive = true,img,year,genres,name,age}) {
    return (
        <div className={responsive && "col-6 col-md-4 col-xl-2"}>
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src={img} alt="movies" />
                    <div className={styles.card_content}>
                        <p>{name}</p>
                        <div>
                            <span>{year}</span>
                            <span>{age}</span>
                            <span>{genres}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
