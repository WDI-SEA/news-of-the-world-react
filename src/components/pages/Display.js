import React from "react";
import {useParams} from 'react-router-dom'

function Display(props) {
    const {id} = useParams()
    console.log(props.data[id])
    const details = props.data[id]
    return (
        <div>
            <h2>{details.title}</h2>
            <p>author: {details.author}</p>
            <p>{details.content}</p>
            <p>{details.description}</p>
            <p>{details.publishedAt}</p>
            <img src={details.urlToImage} width="300px"></img>
            <a href={details.url}><p> More Info </p></a>
        </div>

    )
}

export default Display;