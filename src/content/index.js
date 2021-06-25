import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works

export const App = () => {
    const [search, setSearch] = useState('')
    const [toApi, setApi] = useState('business')
    const [data, setData] = useState({hits: []})

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        document.title = "Newts"
        fetch(`http://newsapi.org/v2/everything?q=${toApi}&from=2021-02-10&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(rdata => {
            setData({hits: rdata.articles})
        })
    }, [toApi])

    const handleSubmit = (e) => {
        e.preventDefault()
        setApi(search)
    }

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <div className="headerContainer">
                    <h1>ChillBoi News</h1>
                </div>
                <Route exact path="/" render={() => <Landing handleChange={handleChange} handleSubmit={handleSubmit} results={data.hits} />} />
                <Route path="/details/:id" render={(props) => <Display {...props} article={data.hits[props.match.params.id]} />} />
            </div>
        </Router>
    )
};