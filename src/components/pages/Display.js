import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    let { id } = useParams()

    const article = props.articles[id]
    console.log(article)
    return (
        <>
        <h1>Display Page</h1>

        <a href={`${article.url}`}>
            <h1>{article.title}</h1>
        </a>
        <p>{article.description}</p>
        <h3>Written by: {article.author} | {article.source.name}</h3>
        <p>Published on: {article.publishedAt}</p>
        <img src={`${article.urlToImage}`} />


        
        </>

    )
}

export default Display;