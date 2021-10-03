import './App.css';
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
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
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
