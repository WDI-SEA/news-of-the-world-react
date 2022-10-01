import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

function Landing() {
    const [search, setSearch] = useState(null)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        async function fetchNews() {
            try {
                const response = await axios.get(url)
                const articles = await response.data.articles
                setArticles(articles)

            } catch (err) {
                console.warn(err)
            }
        }
        fetchNews()
    })

    const articlesArr = articles.map((article, idx) => {
        return (
        <ul key={`article-${idx}`}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </ul>
        )
    })

    return (
        <div>
            <h1>News</h1>
            {articlesArr}
        </div>

    )
}

export default Landing;