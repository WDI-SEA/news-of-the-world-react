import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    let params = useParams()
    let content = props.data ? props.data[params.id]: 'This did not work'
    return (
        <div>
            <h1>Display Page</h1>
            <h1>{content.title}</h1>
            <h4>{content.author}</h4>
            <p>{content.content}</p>
        </div>
    )
}

export default Display;