import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";


// 	Landing page shows all recent news articles, or a filtered list based on what the user searches
export default function Landing({articles}) {  
    // set state for all user search contnet
    const [input, setInput] = useState("")
    // filtering search
    const titles = articles.filter((article) => article.title.toLowerCase().includes(input.toLowerCase()))

    // // url for all news content
    // const filterNews = `https://newsapi.org/v2/everything?q=${content}&apiKey=process.env.REACT_APP_X_API_KEY`

    // const handleContentFilter = e => {
    //     e.preventDefault()
    //     axios.get(filterNews)
    //     .then (response => {
    //         setArticles(response.data.articles)
    //     }) .catch (err => 
    //         console.log(err))
    // }

    .map((article, idx) => {
        return (
            <div 
            key={`article-link${idx}`}>
            <Link to={`/articles/${idx}`}> 
            {article.title}
            </Link>
            </div>            
        )
    })

    return (
        <>
        <h1>News From The World</h1>
        <form>
            <label htmlFor= "Search">Search News Articles:</label>
            <input
            type="text"
            id="search"
            value={input}
            onChange= {(e) => setInput(e.target.value)}
            />
            <input
            type="submit"
            />
        </form>
        <Link to={`/favorites`}>
            Saved Articles
        </Link>
        <ul>{titles}</ul>
        </>
    )
}

