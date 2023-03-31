import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './about';
import Home from './home';
import './styles/style.scss';
import Navigation from './navigation';
const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
      </Router>
    </div>
  )
}

export default App