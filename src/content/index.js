import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import { NavBar } from './Display/NavBar'
import { Faves } from './Display/Faves'


import '../styling/style.css';



// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
// set up states and props 
// api key to render its info
// make nav bar component including search bar
export const App = () => {
    const [search, setSearch] = useState('')
    const [faves, setFaves] = useState([])
    
    
    // useEffect(() => {
    //     fetch(`http://newsapi.org/v2/everything?q=Apple&from=2021-02-12&sortBy=popularity&apiKey=ba54c0691d8f4ec2a582e4a76c415013`)
    //     .then(response => response.json())
        
    // })


    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <NavBar />
                <Landing />
                <Faves />
            </div>
        </Router>
    )
};