import React, {useEffect, useState} from 'react';
import axios from 'axios'

export const Landing = props => {
    const[results, setResults] = useState([])
    
    useEffect(() => {
        axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response =>  {
           setResults(response.data.articles)
            console.log(response.data)
        })
    
    }, [])

    return (
        <div>
            <h1>The Front Page</h1>
            {results.map((articles) => <div><a href={articles.url}>{articles.title}</a></div>)}
        </div>
    )
};