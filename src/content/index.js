import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

require('dotenv').config()
// process.env.REACT_APP_API_KEY

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {

    const [articles, setArticles] = useState([])
    const [tempSearchTerm, setTempSearchTerm] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect( () => {
        // q=${searchTerm}
        fetch(`http://newsapi.org/v2/everything?q=${searchTerm}&domains=wsj.com&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(responseData => {
            // responseData = Object.values(rData) // Converts object of objects to array of objects.
            // console.log(responseData.articles) // responseData
            // console.log(rData[0].name['name-USen']) // responseData
            // let characterNames = rData.map( (char, i) => {
            //   return char.name['name-USen']
            // })
            // let articles = Object.values(responseData.articles)
            console.log(responseData.articles)
            setArticles(responseData.articles)
        })
    }, [searchTerm])

    const updateSearchTerm = (e) => {
        console.log("😎 Updating search term!!!")
        setTempSearchTerm(e.target.value)
    }

    const updateSearchResults = () => {
        setSearchTerm(tempSearchTerm)
    }

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                {/* <Landing /> */}
                <Landing updateSearchTerm={updateSearchTerm} updateSearchResults={updateSearchResults} />
                <Display articles={articles} />
            </div>
        </Router>
    )
}