// External Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";


// Internal Modules
import App from './App';
// import * as serviceWorker from './serviceWorker';

// Styling 
// Will be replaced soon by Styled Components. 
import './index.css';

ReactDOM.render(
        <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// <Router basename={process.env.PUBLIC_URL}>
// </Router>