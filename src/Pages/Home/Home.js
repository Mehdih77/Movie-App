import MainMovies from "../../components/MainMovies/MainMovies";
import MainSlider from "../../components/Sliders/MainHomeSlider/MainSlider";
import PopularMovies from "../../components/PopularMovies/PopularMovies";

export default function Home() {
    return (
        <>
         <MainSlider />
         <MainMovies />
         <PopularMovies />
        </>
    )
}
