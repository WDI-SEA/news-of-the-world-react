import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {

    const [news, setNews] = useState([])


    useEffect(() => {
        axios('http://newsapi.org/v2/top-headlines?country=us&apiKey=63ca6b792d99475da52089c83360b842')
        // .then(response => response.json())
        .then(rdata => {
            console.log(rdata)
            // rdata = Object.values(rdata) 
            console.log(rdata)
            setNews(rdata)
            
          })
        }, [])



    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Route exact path="/" component={Landing} />
                <Route path="/display" render={() => <Display news={news} /> } />
            </div>
        </Router>
    )
};