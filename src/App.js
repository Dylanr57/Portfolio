import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from  "./pages/NoMatch";

const App = () => (

  <Router>
    <div>
      <Header/>
      <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/Contact" component={Contact}/>
      <Route exact path = "/Portfolio" component={Portfolio}/>
      <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>

);

export default App;
