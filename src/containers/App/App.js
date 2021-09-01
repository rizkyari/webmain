import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from '../Home/home.js';
import About from '../About/about.js';
import Contact from '../Contact/contact.js';
import NotFound from '../404/404.js';

import Header from '../../components/Header/header.js';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
        <Header/>
        <Switch>
          {/* <Route path="/webmain" exact component={() => (<Redirect to="/" />)} /> */}
          <Route path="/webmain" exact component={Home}/>
          <Route path="/webmain/about" component={About}/>
          <Route path="/webmain/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
