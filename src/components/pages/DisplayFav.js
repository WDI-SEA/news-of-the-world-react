import React from "react";
import { Link, useParams } from 'react-router-dom'


const DisplayFav = props => {

    const { id } = useParams();

    return (
        <div>
            <Link to="/">Back </Link>
            <h1>Display Page</h1>
            <h3>{props.favorites[id].title}</h3>
            <p>{props.favorites[id].description}</p>
            <a href={props.favorites[id].url}>{props.favorites[id].url}</a>
            <br />
            <small>Authors: {props.favorites[id].author}</small>
        </div>
    )
}

export default DisplayFav;