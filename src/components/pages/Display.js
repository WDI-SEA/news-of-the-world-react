import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    
    const { id } = useParams()
    
    return (
        <>
        <h1>Display Page</h1>
        <p>{props.articles[id].description}</p>
        </>
    )
}

export default Display;