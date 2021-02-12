import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const Index = (props) => {
    const [country, setCountry] = useState('us')
    const [favCats, setFavCats] = useState([])

    const [data, setData] = useState([])
    const [search, setSearch] = useState(null)
    const [category, setCategory] = useState(props.category)
    const categories = ['sports', 'technology', 'health', 'business', 'entertainment', 'science', 'sports']

    if (category !== props.category) {
        setCategory(props.category)
    }

    useEffect(() => {
        let url
        if (!categories.includes(props.category)) {
            url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}`
        }

        axios.get(url)
        .then(res => {
            let resData = res.data.articles
            setData(resData)
        })
    }, [category])

    const inputSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    
    const submitSearch = () => {
        console.log('Submitting')
        axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            let resData = res.data.articles
            setData(resData)
        })
    }

    return (
        // Router for setting routes 
        <Router>
            <div className='app'>

                <div className='search-bar'>
                    <label>Search for...</label>
                    <input type='text' onChange={inputSearch} />
                    <input type='submit' onClick={()=>{if (search) {submitSearch()}}} />
                </div>

                <Display className='display-div' data={data} />
            </div>
        </Router>
    )
};