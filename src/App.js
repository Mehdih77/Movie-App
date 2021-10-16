import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import TopRated from './Pages/Discover/TopRated';
import NowPlaying from './Pages/Discover/NowPlaying';
import Popular from './Pages/Discover/Popular';
import Upcoming from './Pages/Discover/Upcoming';
import MovieBySearch from './Pages/Discover/MovieBySearch';
import PricingPlans from './Pages/PricingPlans/PricingPlans';
import SingleMoviePage from './Pages/SingleMoviePage/SingleMoviePage';
import Person from './Pages/Person/Person';
import SingleTvPage from './Pages/SingleTvPage/SingleTvPage';
import MovieByGenrePage from './Pages/MovieByGenrePage/MovieByGenrePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/pricing' exact component={PricingPlans} />
          <Route path='/movies/:id' exact component={SingleMoviePage} />
          <Route path='/tv/:id' exact component={SingleTvPage} />
          <Route path='/person/:id' exact component={Person} />
          <Route path='/genre/:name/:id' exact component={MovieByGenrePage} />
          <Route path='/nowplaying' exact component={NowPlaying} />
          <Route path='/toprated' exact component={TopRated} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/upcoming' exact component={Upcoming} />
          <Route path='/searched/:movie' exact component={MovieBySearch} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
