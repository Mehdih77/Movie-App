import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`${styles.footer} container-fluid`}>
            <div className="row">
                <div className={`${styles.footer_left} col-12 col-md-12 col-xl-3`}>
                    <img className='img-fluid' src="/images/header-logo.png" alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate accusantium voluptatibus soluta.</p>
                    <div className={styles.footer_social_icons}>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div className={`${styles.footer_rights} col-6 col-md-4 col-xl-3`}>
                    <h5>Display Type</h5>
                    <ul>
                        <li>Action</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Horror</li>
                    </ul>
                </div>
                <div className={`${styles.footer_rights} col-6 col-md-4 col-xl-3`}>
                    <h5>Production</h5>
                    <ul>
                        <li>2018 Year</li>
                        <li>2019 Year</li>
                        <li>2020 Year</li>
                        <li>2021 Year</li>
                    </ul>
                </div>
                <div className={`${styles.footer_rights} col-6 col-md-4 col-xl-3`}>
                    <h5>Display Quality</h5>
                    <ul>
                        <li>720p HDTV</li>
                        <li>1080p BluRay</li>
                        <li>720p BluRay</li>
                        <li>1080p WEB-DL</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
