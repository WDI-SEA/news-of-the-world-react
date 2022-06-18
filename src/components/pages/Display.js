import React from "react";
import {useParams} from "react-router-dom"

function Display({articles , handleFavoriteArticle}) {
    let {id} = useParams()
    // console.log(id)
    
    return (
        <div>
            <img src={articles[id].urlToImage} />
            <p>News Source: {articles[id].source.name}</p>
            {!handleFavoriteArticle? "": 
                <button
                value = {JSON.stringify(articles[id])}
                onClick={handleFavoriteArticle}
                > Add to Favorites!</button>
            }
            <p>Title: {articles[id].title}</p>
            <p>Author: {articles[id].author === null ? "Anonymous": articles[id].author}</p>
            <p>Published: {articles[id].publishedAt}</p>
            <a href={articles[id].url}></a>
            <p>{articles[id].content === null ? "" : articles[id].content}</p>
        </div>
    )
}

export default Display;