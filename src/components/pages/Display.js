import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    const { id } = useParams()
    let article
    if (props.savedArticleList) {
        article = props.savedArticleList[id]
    } else if(props.articleList) {
        article = props.articleList[id]
    } else {
        return <h2>Oops no article to display</h2>
    }
    const date = new Date(article.publishedAt)
    const published = date.toDateString()

    return (
        <div>
            <a target="_blank" href={article.url} rel="noreferrer">
                <h2>{article.title}</h2>
            </a>
            <h4>Published on: {published}</h4>
            <h4>From: {article.source.name}</h4>
            <h4>By: {article.author}</h4>

            <p>{article.description}</p>
            <p>{article.content}</p>
        </div>
    )
}

export default Display;