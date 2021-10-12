import Card from '../../components/Cards/Card/Card';
import styles from './Discover.module.css';

export default function Upcoming() {
    return (
        <section className={`${styles.discover_page} container mt-4`} style={{minHeight:"472px"}}>
            <div className="row">
                <h4 className={styles.discover_title}>Upcoming Movies</h4>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                    <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                </div>
            </div>
        </section>
    )
}
