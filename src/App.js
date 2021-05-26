import React from "react";
import { Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

import "./App.css";

export default function App() {
    return(
        <div className="App">
            <div>
                <h1>State w/ Active Links</h1>
                <NavBar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
            </div>
        </div>
    )
}