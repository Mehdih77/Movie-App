import CurrentSlider from '../Sliders/CurrentSlider/CurrentSlider';
import styles from './Top10Movies.module.css';
import bg_img from '../../img/test11.jpg';
import OverlayCard from '../Cards/OverlayCard/OverlayCard';

export default function Top10Movies() {
    return (
        <>
            <h4 className={styles.top10_movies_title}>TOP10 MOVIES</h4>
            <CurrentSlider>
                <OverlayCard img={bg_img} name={'City dreams'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'} />
                <OverlayCard img={bg_img} name={'City dreams'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'} />
                <OverlayCard img={bg_img} name={'City dreams'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'} />
                <OverlayCard img={bg_img} name={'City dreams'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.'} />
            </CurrentSlider>
        </>
    )
}
