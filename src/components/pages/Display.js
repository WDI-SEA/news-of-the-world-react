import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    const { id } = useParams()
    const article = props.news[id]

    if(!article) {
        return <h1>Error! Something went wrong...</h1>
    }
    return (
        <div className="display-news">
            <h2>{article.title}</h2>

            <p>by: {article.author}</p>

            <img src={article.urlToImage} alt={article.title} />

            <p>{article.content}</p>

            <a target='_blak' href={article.url}>See more chars...</a>

        </div>
    )
}

export default Display;