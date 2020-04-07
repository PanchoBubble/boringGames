import React from 'react';
import Navbar from './containers/NavBar';
import Singup from './containers/forms/Singup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <div className="container pt-3">
                    <Switch>
                        <Route path="/singup">
                            <Singup />
                        </Route>
                        <Route path="/about">
                            <h2>About</h2>
                        </Route>
                        <Route path="/">
                            <h1>Home</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
