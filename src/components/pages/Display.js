import React from "react";
import { Link, useParams } from 'react-router-dom'


const Display = props => {

    const { id } = useParams();

    return (
        <div>
            <Link to="/">Back </Link>
            <h1>Display Page</h1>
            <h3>{props.articles[id].title}</h3>
            <p>{props.articles[id].description}</p>
            <a href={props.articles[id].url}>{props.articles[id].url}</a>
            <br />
            <small>Authors: {props.articles[id].author}</small>
        </div>
    )
}

export default Display;