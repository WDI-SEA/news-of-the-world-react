import React from "react";
import { useParams } from "react-router-dom";

function Display(props) {
    const { id } = useParams()
    const articleId = props.articles[id]
    console.log(articleId)


    return (
        <>
            <h1>Display Page</h1>
            <h3>{articleId.title}</h3>

            <h6>{articleId.author}</h6>
            <p>{articleId.publishedAt}</p>
            <a href={articleId.url} ><img src={articleId.urlToImage} width='200' /> </a>
            <p>{articleId.description}</p>
            <p>{articleId.content}</p>

        </>
    )
}

export default Display;