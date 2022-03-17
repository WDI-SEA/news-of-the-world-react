import React from "react";
import { useParams } from 'react-router-dom'

function Display({ articles }) {
    const { id } = useParams()

    return (
        <div>
            <h1>Display Page</h1>

            <div className="display-image">
                <img src={articles[id].urlToImage} />
            </div>
            <div className="display-author">
                <h3>By: {articles[id].author}</h3>
            </div>
            <div className="display-content">
                <p>{articles[id].content}</p>
                <a href={articles[id].url} target='_blank'>See more</a>
            </div>
            <div>
                <p>{articles[id].description}</p>
            </div>
            <div className="display-source">
                <p>Source: {articles[id].source.name}</p>
            </div>
        </div>
    )
}


export default Display;