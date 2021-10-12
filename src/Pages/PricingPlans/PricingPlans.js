import styles from './PricingPlans.module.css';
import PricingPlansCard from "../../components/Cards/PricingPlansCard/PricingPlansCard";
import { Link } from 'react-router-dom';

export default function PricingPlans() {
    return (
        <>
            <div className={styles.parallax}>
                <h3>Pricing Plans</h3>
                <div>
                    <i className="fas fa-home"></i> 
                    <Link to='/' href='/'>Home</Link>
                    <i className="fas fa-chevron-right"></i>
                    <Link to='/pricing' href='/pricing'>Pricing Plans</Link>
                </div>
            </div>
            <section className='container'>
                <div className="row">
                    <div className={styles.pricing_title}>
                        <h4>Our Monthly Plans</h4>
                        <p>Choose the ideal plan for what you need. We work with affordable prices for all types of pocket.</p>
                    </div>
                    <div className="col-xl-4">
                        <PricingPlansCard type={'standard'} />
                    </div>
                    <div className="col-xl-4">
                        <PricingPlansCard type={'platinum'} />
                    </div>
                    <div className="col-xl-4">
                        <PricingPlansCard type={'premium'} />
                    </div>
                </div>
            </section>
        </>
    )
}
