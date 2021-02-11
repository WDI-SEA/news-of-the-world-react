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
    const [content, setContent] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    let title;
    var url = (`http://newsapi.org/v2/top-headlines?` + `country=us&` + `apiKey=${process.env.REACT_APP_API_KEY}`);


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setContent(Object.values(res.data))
            })
    }, []);



    const dynamicSearch = e => {
        setQuery(e.target.value);
        let filtered = content[2].filter(article => {
            return article.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setSearchResults(filtered)
    }
    console.log(content)
    console.log(query)
    console.log(searchResults)

    if (content.length != 0) {
        title = searchResults.map((article, i) => {
            return (
                <Display
                    key={i}
                    article={article}
                />
            )
        })
    }

    return (

        <Router>
            <div className='app'>
                <Landing search={dynamicSearch} />
                {title}
            </div>
        </Router>
    )
};