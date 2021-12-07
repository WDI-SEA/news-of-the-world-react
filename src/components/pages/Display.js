import React from 'react'
import { useParams } from 'react-router';

function Display(props) {
    const { id } = useParams()

    return (
        <div>
            <h1>Display Page</h1>
            <h3>{props.articles[id].title}</h3>
            <p>{Date.parse(props.articles[id].publishedAt)} - {props.articles[id].author}</p>
            <p>{props.articles[id].content}</p>
        </div>
    )
}

export default Display;