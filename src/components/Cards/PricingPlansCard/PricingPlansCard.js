import styles from './PricingPlansCard.module.css';

export default function PricingPlansCard({type}) {

    return (
        <>
            {type === 'standard' && <div className={styles.pricing_card_wrapper}>
                <div className={styles.pricing_card_title}>
                    <h5>STANDARD</h5>
                    <p>$0 <sub>/month</sub></p>
                </div>
                <div className={styles.pricing_card_content_standard}>
                    <li><i className="fas fa-times"></i> New Movies</li>
                    <li><i className="fas fa-times"></i> Streamit Special</li>
                    <li><i className="fas fa-times"></i> American Tv Shows</li>
                    <li><i className="fas fa-times"></i> Hollywood Movies</li>
                    <li><i className="fas fa-times"></i> FHD (1080p) Video Quality</li>
                    <li><i className="fas fa-times"></i> Ad Free Entertainment</li>
                </div>
                <button className={styles.pricing_card_btn}>PURCHASE</button>
            </div>}
            {type === 'platinum' && <div className={styles.pricing_card_wrapper}>
                <div className={styles.pricing_card_title}>
                    <h5>PLATINUM</h5>
                    <p>$79 <sub>/month</sub></p>
                </div>
                <div className={styles.pricing_card_content_platinum}>
                    <li><i className="fas fa-check"></i> New Movies</li>
                    <li><i className="fas fa-check"></i> Streamit Special</li>
                    <li><i className="fas fa-check"></i> American Tv Shows</li>
                    <li><i className="fas fa-check"></i> Hollywood Movies</li>
                    <li><i className="fas fa-check"></i> FHD (1080p) Video Quality</li>
                    <li><i className="fas fa-times"></i> Ad Free Entertainment</li>
                </div>
                <button className={styles.pricing_card_btn}>PURCHASE</button>
            </div>}
            {type === 'premium' && <div className={styles.pricing_card_wrapper}>
                <div className={styles.pricing_card_title}>
                    <h5>PREMIUM</h5>
                    <p>$0 <sub>/month</sub></p>
                </div>
                <div className={styles.pricing_card_content_premium}>
                    <li><i className="fas fa-check"></i> New Movies</li>
                    <li><i className="fas fa-check"></i> Streamit Special</li>
                    <li><i className="fas fa-check"></i> American Tv Shows</li>
                    <li><i className="fas fa-check"></i> Hollywood Movies</li>
                    <li><i className="fas fa-check"></i> FHD (1080p) Video Quality</li>
                    <li><i className="fas fa-check"></i> Ad Free Entertainment</li>
                </div>
                <button className={styles.pricing_card_btn}>PURCHASE</button>
            </div>}
        </>
    )
}
