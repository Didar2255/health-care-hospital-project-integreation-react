import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Services from './Page/Services/Services';
import FindDoctor from './Page/FindDoctor/FindDoctor'
import Header from './Components/Header/Header';
import About from './Page/About/About';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Footer from './Components/Footer/Footer';
import NotFound from './Page/NotFound/NotFound';
import LogIn from './Page/LogIn/LogIn';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
