import React from "react";
import { useParams, Link } from "react-router-dom";

function Display(props) {

   const { id } = useParams()

    const currentArticle = props.articles[id]
    return (
        <div className="displayDiv">
            <h1>{currentArticle.title}</h1>
            <h3>{currentArticle.author}{" | "}{currentArticle.publishedAt.split('T')[0]}</h3>
            <p>{currentArticle.content}</p>
            <a target="_blank" href={`${currentArticle.url}`}>Original Article</a>
            <button onClick={() => props.handleSetFavorite(currentArticle) } >Add to Favorites</button>
        </div>

    )
}

export default Display;