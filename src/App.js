import React, {Suspense} from 'react';
import Layout from './Layout/Layout';
// import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LazyLoader from './components/Loader/LazyLoader';

// React Lazy
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const TopRated = React.lazy(() => import('./Pages/Discover/TopRated'));
const NowPlaying = React.lazy(() => import('./Pages/Discover/NowPlaying'));
const Popular = React.lazy(() => import('./Pages/Discover/Popular'));
const Upcoming = React.lazy(() => import('./Pages/Discover/Upcoming'));
const MovieBySearch = React.lazy(() => import('./Pages/Discover/MovieBySearch'));
const PricingPlans = React.lazy(() => import('./Pages/PricingPlans/PricingPlans'));
const SingleMoviePage = React.lazy(() => import('./Pages/SingleMoviePage/SingleMoviePage'));
const Person = React.lazy(() => import('./Pages/Person/Person'));
const SingleTvPage = React.lazy(() => import('./Pages/SingleTvPage/SingleTvPage'));
const MovieByGenrePage = React.lazy(() => import('./Pages/MovieByGenrePage/MovieByGenrePage'));

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Suspense fallback={<LazyLoader />}>
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
            {/* <Route component={NotFoundPage} /> */}
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
