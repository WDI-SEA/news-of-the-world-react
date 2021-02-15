import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import axios from 'axios'

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [userInput, setUserInput] = useState('')
    const [searchClick, setSearchClick] = useState('')
    const [arrayOfNews , setArrayOfNews] = useState([])
    const searchUserInput = (e) => {
        setUserInput(e.target.value)
    }
    
    const pressSearch = () => {
        setSearchClick(userInput)
        setUserInput('')
    }
    useEffect(() => {
        // get pic from api
        // stor the pic in state
        axios.get(`http://newsapi.org/v2/everything?q=${searchClick}&apiKey=${apiKey}`)
        .then(response => {
          console.log(response.data.articles)
          setArrayOfNews(response.data.articles)
        })
        .catch(err => {
          console.log(err)
        })
      }, [searchClick]) 

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing arrayOfNews={arrayOfNews} searchClick={pressSearch} userInput={userInput} search={searchUserInput} />
                <Display data={'hi'} />
            </div>
        </Router>
    )
};