import { Link } from 'react-router-dom';
import styles from './OverlayCard.module.css';

export default function OverlayCard({img,name,detail}) {
    return (
        <div className={`${styles.overlay_card_main} px-1`}>
            <div style={{
                backgroundImage: `url(${img})`
            }}>
                <img className={`${styles.overlay_card_img}`} src="/images/top10-movies-badge.png" alt="top10-movies" />
                <div className={`${styles.overlay_card_content}`}>
                    <h2>{name}</h2>
                    <p>{detail}</p>
                    <div className={`${styles.overlay_card_btn}`}>
                        <button>
                            <Link>
                                <i className="fas fa-info"></i>Details</Link>
                        </button>
                        <button>
                            <Link>
                                <i className="fas fa-plus"></i>My List</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
