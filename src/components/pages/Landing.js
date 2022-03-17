import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'


function Landing() {
    const myKey = process.env.REACT_APP_API_KEY
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDate()
    // const latestDate = new Date(year, month, day)
    const latestDate = new Date()
    // console.log(latestDate)

    const [newsArticle, setNewsArticle] = useState([])

    // const url = `https://newsapi.org/v2/everything?=${latestDate}&sortBy=popularity&apiKey=${myKey}`
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`
        axios.get(url)
            .then(dataResponse => setNewsArticle(dataResponse.data.articles))
        // fetch(url)
        //     .then(response => response.json())
        //     .then(jsonData => {
        //         setFilms(jsonData.results)
        //     })
    }, [])

    const allArticles = newsArticle.map((article, idx) => {
        return (
            <li key={`article-${idx}`}><Link to='/article:id'>{article.title}</Link></li>
        )
    })
    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                {allArticles}
            </ul>
        </div>
    )
}

export default Landing;