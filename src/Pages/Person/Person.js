import PersonCard from '../../components/Cards/PersonCard/PersonCard';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';
import styles from './Person.module.css';

export default function Person() {
    return (
        <>
            <div className={styles.parallax}></div>
            <section className='container-fluid'>
                <div className="row my-5">
                    <PersonCard />
                </div>
                <RelatedMovies />
            </section>
        </>
    )
}
