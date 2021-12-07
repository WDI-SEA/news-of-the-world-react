import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom'


const Display = props => {

    const { id } = useParams();

    return (
        <div>
            <h1>Display Page</h1>
            <p>{props.articles[id].description}</p>
        </div>
    )
}

export default Display;