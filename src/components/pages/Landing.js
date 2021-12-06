import React, { useState, useEffect } from "react";
require('dotenv').config()


function Landing() {
    let [searchResults,setSearchResults] = useState([])
    let [searchTerm,setSearchTerm] = useState('bitcoin')
    let [faves,setFaves] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=99ae9a369d9d472c944160bb8f87cbee`)
        .then(response => response.json())
        .then(rdata => {
            console.log('response data', rdata)
            setSearchResults(rdata.articles)
        })
    }, [searchTerm])

    // const handleChange = (e) => {
        //     setSearchTerm(e.target.value)
        // }
        
        const handleSubmit = (e) => {
            e.preventDefault()
            setSearchTerm(e.target[0].value)
        }
        
        const handleFave = (article) => {
            if (faves.indexOf(article) === -1) {
                setFaves([...faves, article])
            }
        }

        const handleClick = (article) => {
            console.log('')
        }
        
        const allResults = searchResults.map( (article, i) => {
            return <li onClick={() => handleFave(article)} key={i}>{article.title}</li>
        })

        const allFaves = faves.map( (article, i) => {
            return <li key={i}>{article.title}</li>
        })

    return (
        <>
            <h1>Landing Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" />
                <input type="submit" value="Search" />
            </form>
            <h3>Results:</h3>
            <ul>
                {allResults}
            </ul>
            <h3>Favorite Articles:</h3>
            <ul>
                {allFaves}
            </ul>
        </>
    )
}

export default Landing;