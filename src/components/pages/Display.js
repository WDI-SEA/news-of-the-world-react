import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    let { articleId } = useParams()
    let results = props.news[0][articleId]
    let showResult = () => {
        return (
            <div>
                <h2>{results.title}</h2>
                <p>{results.author}</p>
                <p>{results.content} <a target="_blank" href={results.url}>Go to Article</a></p>
                <button type='submit' value={articleId} onClick={props.handleFaves}>Add to Favorites</button>
            </div>
        )
    }

    return (
        <>
            {showResult()}
        </>

    )
}

export default Display;