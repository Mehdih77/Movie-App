import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import MovieByGenre from './Pages/MovieByGenre/MovieByGenre';
import TopRated from './Pages/Discover/TopRated';
import NowPlaying from './Pages/Discover/NowPlaying';
import Popular from './Pages/Discover/Popular';
import Upcoming from './Pages/Discover/Upcoming';
import MovieBySearch from './Pages/Discover/MovieBySearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PricingPlans from './Pages/PricingPlans/PricingPlans';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/pricing' exact component={PricingPlans} />
          <Route path='/genre' exact component={MovieByGenre} />
          <Route path='/nowplaying' exact component={NowPlaying} />
          <Route path='/toprated' exact component={TopRated} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/upcoming' exact component={Upcoming} />
          <Route path='/searched' exact component={MovieBySearch} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
