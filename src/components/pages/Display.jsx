import React from "react";
import { useParams } from "react-router-dom";
import { useState } from 'react'

// Displays all info about the article with the api id as indicated in the url params

export default function Display({articles}) {
   
    // state setting for displayedArticle article displayed
    const [displayedArticle, setDisplayedArticle] = useState({})
    
    const {idx} = useParams()
   

   return (
       <div> 
           <h1>News Article</h1>
           <h3>
               Author: {articles[idx].author}
               </h3>
            <h4> 
               Title: {articles[idx].title}
               </h4>   
               
               <p>
               Description: {articles[idx].description}
               </p>
            
           <img alt="displayedarticleimage" src={articles[idx].urlToImage}/>
       </div>
   )
}
