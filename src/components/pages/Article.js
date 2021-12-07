import React from 'react'
import { useParams } from "react-router-dom";

function Article(props) {
        let id = useParams().id
        console.log(props.allResults[id])
        return (
            <div>
                <h1>{props.allResults[id].title}</h1>
                <h3>By: {props.allResults[id].author}</h3>
                <p>{props.allResults[id].content}</p>
            </div>
        )
}

export default Article