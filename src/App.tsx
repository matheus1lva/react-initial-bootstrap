import React from 'react';
import hotloader from 'react-hot-loader';
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

export default hotloader.hot(module)(App);
