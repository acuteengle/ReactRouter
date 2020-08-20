import React from 'react';
//https://reactrouter.com/web/guides/quick-start
//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Action from './pages/Action';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/action/:actionId" component={Action} />
        <Route render={() => {
          return <p>Not found</p>
        }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
