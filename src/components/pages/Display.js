import React from "react";
import { useParams, Link } from 'react-router-dom'

function Display({ articles, handleClick, removeFave, faves }) {
    const { id } = useParams()

    return (
        <div>
            {/* <h1>Display Page</h1> */}

            <div className="display-title">
                <h2>{articles[id].title}</h2>
            </div>

            <div className="display-image">
                <img src={articles[id].urlToImage} />
            </div>
            <div>
                <p>{articles[id].description}</p>
            </div>
            <div className="display-author">
                <h3>By: {articles[id].author}</h3>
            </div>
            <hr />
            <div className="display-content">
                <p>{articles[id].content}</p>
                <a href={articles[id].url} target='_blank'>See more</a>
            </div>
            <div className="display-source">
                <p>Source: {articles[id].source.name}</p>
            </div>
            <div className="display-publishedDate">
                <p>Date Published: {articles[id].publishedAt}</p>
            </div>
            {!faves.includes(articles[id]) ?
                <button onClick={() => handleClick(articles[id])}>Save</button> :
                <button onClick={() => removeFave(articles[id])}> Saved </button>
            }
            <br />
            <Link to='/'>Back</Link>

        </div>
    )
}


export default Display;