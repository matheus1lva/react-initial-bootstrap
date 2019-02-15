import * as React from 'react';
import * as hotloader from 'react-hot-loader';
import './style.css';

const App = () => <h1>Hi my world</h1>;

export default hotloader.hot(module)(App);
