import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';


// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works

// console.log(process.env.REACT_APP_API_KEY)

const API = process.env.REACT_APP_API_KEY

export const App = () => {
    const [articles, setArticles] = useState()
    const [faves, setFaves] = useState()
    const [query, setQuery] = useState('')

    const searchUsArticle =(e) =>{
        e.preventDefault()
        console.log('Searching US articles')
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=' + API)
        .then(response => response.json())
        .then(jsonData =>{
            console.log(jsonData)
            setArticles(jsonData.articles)            
        })
    }

    const searchQuery = (e) =>{
        e.preventDefault()
        console.log('searching based off of query')

        console.log(e.target.id)
        fetch('http://newsapi.org/v2/everything?q=' + query + '&apiKey='+ API)
        .then(response => response.json())
        .then(jsonData =>{
            console.log(jsonData)
            setArticles(jsonData.articles)            
        })
    }
    const setSearchTerm = (e) =>{
        setQuery(e.target.value);
    }
    
    const saveToFavorites = (e) =>{
        e.preventDefault()
        //console.log(e.target.name)
        setFaves(e.target.name)
        e.target.value = 'Article saved to faves!'
    }
    console.log(articles)
    return (
        // Router for setting routes
        <Router>
            <div className='app'>
            <Route path='/' render ={() => <Landing searchUsArticle={searchUsArticle} searchQuery={searchQuery} query={query} setSearchTerm={setSearchTerm}/>} />
                <Display articles={articles} saveToFavorites={saveToFavorites}/>
            </div>
        </Router>
    )
};