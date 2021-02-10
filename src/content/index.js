import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {



    const [content, setContent] = useState([])

    var url = (`http://newsapi.org/v2/top-headlines?`+`country=us&`+`apiKey=${process.env.REACT_APP_API_KEY}`)
    

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setContent(res.data)
        })
    }, [])



    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing />
                <Display content={content}/>
            </div>
        </Router>
    )
};