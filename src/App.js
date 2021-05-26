import React from "react";
import { Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import "./App.css";

const App = () => (
  <div className="App">
    <div>
      <h1>State w/ Active Links</h1>
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </div>
  </div>
);

export default App;
