import React,{Fragment} from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Developer from './components/pages/Developer';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import ContactState from './context/contact/ContextState';

const  App=() => {
  return (
    <ContactState>
    <Router>
    <Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/about' component={About} />
          <Route exact path ='/developer' component={Developer} />
        </Switch>
      </div>
      </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
