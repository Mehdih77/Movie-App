import { Link } from 'react-router-dom';
import styles from './OverlayMainCard.module.css';

export default function OverlayMainCard({id,img,name,year,age,time,detail}) {

    const imageUrl = `https://image.tmdb.org/t/p/original/${img}`;

    return (
        <div className={`${styles.slider_item}`}>
            <div
                style={{
                backgroundImage: `url(${imageUrl})`
            }}
                className={`${styles.slider_content}`}>
                <div className={`${styles.slider_body}`}>
                    <div className={`${styles.slider_body_badge}`}>New</div>
                    <h2>{name}</h2>
                    <div className={`${styles.slider_body_date}`}>
                        <span>{year}</span>
                        <span>{age}</span>
                        <span>{time}</span>
                    </div>
                    <p>{detail}</p>
                    <div className={`${styles.slider_body_btn}`}>
                        <Link to={`/movies/${id}`}>
                            <button>
                                    <i className="fas fa-info"></i>Details
                            </button>
                        </Link>
                        <button>
                                <i className="fas fa-plus"></i>My List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
