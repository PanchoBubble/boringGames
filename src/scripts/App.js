import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <h1>Home</h1>
                </Route>
            </Switch>
        </Router>
    )
}