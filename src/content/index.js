import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

import ArticleData from './ArticleData'

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works

// console.log(process.env.REACT_APP_API_KEY)

const API = process.env.REACT_APP_API_KEY

export const App = () => {
    const [articles, setArticles] = useState(ArticleData)
    
    // useEffect(() =>{
    //     fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=d3bd5a63f2a046bb809d9496d222491c')
    //     .then(response => response.json())
    //     .then(jsonData =>{
    //         console.log(jsonData)
    //         setArticles(jsonData.articles)            
    //     })
    // }, [])
    

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
            <Route path='/' render ={() => <Landing />} />
                <Display articles={articles}/>
            </div>
        </Router>
    )
};