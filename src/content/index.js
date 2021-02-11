import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import { LandingDetail } from './LandingDetail';
import { Header } from './Header'
import { Detail } from './Detail'

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    // console.log(process.env.REACT_APP_API_KEY)

    let ApiKey = process.env.REACT_APP_API_KEY
    const [headLine, setHeadLine] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useState('')

    useEffect(async () => {
        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`)
        .then(response => response.json())
        .then(jsonData => {
            setHeadLine(jsonData)
        }).catch(err => {
            console.log(err, 'We got problem getting API - headline')
        })
    }, [])

    const searchNews = (e) => {
        e.preventDefault()
        // console.log('clicked')
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${ApiKey}`)
        .then(response => response.json())
        .then(jsonData => {
            setSearchResults(jsonData)
            console.log(jsonData, 'this is searched json')
        }).catch(err => {
            console.log(err, 'We got problem getting API - search news')
        })
    }
    
    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        console.log(query, 'query?')
    }

    return (
        // Router for setting routes
        <Router>
            <Route exact path="/"
                render={() => <Header searchNews={searchNews} handleChange={handleChange}/>}
            />
            <div className='app'>
                <Switch>
                    <Route exact
                        path="/"
                        render={() => <Display searchResults={searchResults}/>}
                    />
                    <Route
                        path="/searched/:id"
                        render={({location}) => <Detail location={location} />} />
                </Switch>
                <Switch>
                    <Route exact
                        path="/"
                        render={() => <Landing headLine={headLine}/> } 
                    />
                    <Route
                        path="/:id" 
                        render={({location}) => <LandingDetail location={location}/>} />
                </Switch>
            </div>
        </Router>
    )
};