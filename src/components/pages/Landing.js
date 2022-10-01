import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Landing(props) {
    const [topheadlines, setTopHeadlinesews] = useState([])

    useEffect(()=>{
        const api_key= process.env.REACT_APP_API_KEY
        const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
        console.log(url)
    })
    return (
        <h1>Landing Page</h1>
    )
}

export default Landing;