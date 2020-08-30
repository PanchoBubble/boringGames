import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import NavBar from "./components/NavBar";
import Flappy from "./games/Flappy";

export default function App() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <Router>
                    <Switch>
                        <div className="game-container">
                            <Route path="/">
                                <Flappy />
                            </Route>
                        </div>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
