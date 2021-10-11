import MainMovies from "../../components/MainMovies/MainMovies";
import MainSlider from "../../components/Sliders/MainHomeSlider/MainSlider";
import PopularMovies from "../../components/PopularMovies/PopularMovies";
import Top10Movies from "../../components/Top10Movies/Top10Movies";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import BestSeries from "../../components/BestSeries/BestSeries";

export default function Home() {
    return (
        <>
         <MainSlider />
         <MainMovies />
         <PopularMovies />
         <Top10Movies />
         <TrendingNow />
         <BestSeries />
        </>
    )
}
