import { Link } from 'react-router-dom';
import styles from './PersonCard.module.css';

export default function PersonCard() {
    return (
        <div className={styles.person_card_wrapper}>
            <div className={styles.person_card_left}>
                <div>
                    <img className='img-fluid' src="/images/cast.jpg" alt="person-page"/>
                </div>
                <div className={styles.person_card_left_content}>
                    <span><i class="fas fa-star-half-alt"></i>Popularity: 17.51%</span>
                    <Link to='/person'>
                        <i className="fab fa-imdb"></i>
                    </Link>
                </div>
            </div>
            <div className={styles.person_card_right}>
                <h2>Chloë Grace Moretz</h2>
                <div className={styles.person_card_right_info}>
                    <p><i className="fas fa-briefcase"></i> Career: <span>Acting</span></p>
                    <p><i className="fas fa-birthday-cake"></i> Date of birth: <span>1997-02-10</span></p>
                    <p><i className="fas fa-star-half-alt"></i> Popularity: <span>17.514%</span></p>
                    <p><i className="fas fa-globe-americas"></i> Born in: <span>Atlanta, Georgia, USA</span></p>
                </div>
                <div className={styles.person_card_right_desc}>
                    <p>Biography:</p>
                    <p>Chloë Grace Moretz (born February 10, 1997) is an American actress and model.
                        She had her breakthrough role in 2010, when she starred as Mindy Macready a.k.a.
                        Hit-Girl in Kick-Ass.
                        Some of her other film credits include (500) Days of Summer (2009), Diary of a Wimpy Kid (2010), Let Me In (2010), Hugo (2011), Dark Shadows (2012), Carrie (2013), If I Stay (2014) and The Equalizer (2014).
                    </p>
                </div>
            </div>
        </div>
    )
}
