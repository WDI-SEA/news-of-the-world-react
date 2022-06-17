import React from "react";
import { useParams } from 'react-router-dom'

export default function Display(props) {
    const { id } = useParams()
    const articleData = props.articles[id]
    return (
        <>
            <h2>{articleData.title}</h2>
            <h3>By:{articleData.author}</h3>
            <a href={`${articleData.url}`}><img src={articleData.urlToImage} width='500px' /> </a>
            <p>{articleData.description}</p>
        </>
    )
}