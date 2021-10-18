import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import FindDoctor from './Page/FindDoctor/FindDoctor'
import Header from './Components/Header/Header';
import About from './Page/About/About';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/SingleService/:id'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/doctor'>
            <FindDoctor></FindDoctor>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
