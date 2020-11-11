import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';
import Main from './Main';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />                
            </Switch>
        </BrowserRouter>
    )
};

export default hot(module)(App);
