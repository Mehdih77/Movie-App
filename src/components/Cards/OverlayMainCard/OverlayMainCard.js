import { Link } from 'react-router-dom';
import styles from './OverlayMainCard.module.css';

export default function OverlayMainCard({img,name,year,age,time,detail}) {
    return (
        <div className={`${styles.slider_item}`}>
            <div
                style={{
                backgroundImage: `url(${img})`
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
