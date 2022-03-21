import React from "react";
import { useParams, Link } from 'react-router-dom'

function Display({ articles, addToFaves }) {
    const { id } = useParams()
    return (
        <>
            <div>
                <h1>Display Pageeeeeeeeee</h1>

                <h1>{articles[id].title}</h1>
                <img src={articles[id].urlToImage} alt={articles.title} width="80%" height="80%" />

                {articles[id].author === '' || articles[id].author === null ? <h3>Written By: Unknown Author</h3> : <h3>Written by: {articles[id].author}</h3>}

                {/* description gets cut off..? */}
                <p>{articles[id].description}</p>

                <button onClick={() => {addToFaves(articles)}}>Add this article to favorites</button>
            </div>
            
            <Link to={'/'}>Back to Home Page</Link>
        </>
    )
}

export default Display;