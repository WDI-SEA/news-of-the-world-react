import React from "react";
import Article from "../Article";
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Display({ 
    articlesResults,
    popularUrl }) {
    const { category } = useParams()

    //const articlesResults =
    //make API call here? - depending on input
    
    
    const theArticles = articlesResults.map((article, index)=>{
        return(<Article articlesResults={article}/>)
    })

    return (
        <>
            <h1>results for {category}</h1>
            <hr></hr>
            {theArticles}
        </>
    )
}