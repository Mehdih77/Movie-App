import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieByGenre from './Pages/MovieByGenre/MovieByGenre';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/genre' exact component={MovieByGenre} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
