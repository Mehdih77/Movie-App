import ByGenreSideBar from '../../components/ByGenreSideBar/ByGenreSideBar';
import Card from '../../components/Cards/Card/Card';

export default function MovieByGenre() {
    return (
        <div className='container mt-5' style={{minHeight:"443px"}}>
            <div className="row">
                <div className='col-md-3 mb-3'>
                    <ByGenreSideBar />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                        <div className="col-6 col-md-6 col-xl-3">
                            <Card img={'/images/movie5.jpg'} name={'The Fast Saga'} star={'6.5'} year={'2021'} />
                        </div>                        
                    </div>
                </div>
            </div>    
        </div>
    )
}
