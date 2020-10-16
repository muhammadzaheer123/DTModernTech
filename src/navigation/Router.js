import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Work from '../components/Work';
import Benefit from '../components/Benefit';
import Shop from '../components/Shop';
import Faq from '../components/Faq';
import Contact from '../components/Contact';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>  
       
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/benefit">
            <Benefit />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>     
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
