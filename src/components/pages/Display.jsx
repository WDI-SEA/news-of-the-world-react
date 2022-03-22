import React from "react";
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { Link } from "react-router-dom";
// Displays all info about the article with the api id as indicated in the url params

export default function Display({articles}) {
   
    // state setting for displayedArticle article displayed
    const [displayedArticle, setDisplayedArticle] = useState({})
    const {idx} = useParams()
    const [savedArticles, setSavedArticles] = useState([])

    const savedOne = (article) => {
        if (!savedArticles.includes(article)) setSavedArticles([...savedArticles, article])
    }

   return (
       <div> 
           <h1>News Article</h1>
           <Link to={'/'}>Home</Link>
           <h3>
               Author: {articles[idx].author}
               </h3>
            <h4> 
               Title: {articles[idx].title}
               </h4>   
                 
           <img alt="displayedarticleimage" src={articles[idx].urlToImage}/>
               <p>
               Description: {articles[idx].description}
               </p>
            <button onClick={() => {savedOne(articles[idx])}}> save the article  </button>
       </div>
   )
}
