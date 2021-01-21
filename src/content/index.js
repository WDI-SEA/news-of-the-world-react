import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing />
                <Display />
            </div>
        </Router>
    )
};