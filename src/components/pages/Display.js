import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

function Display({ articles }) {
    let { id } = useParams()
    const filteredArticles = articles[id]
    console.log(filteredArticles);
    return (
        <div>
            <h1>Display Page</h1>

            <Link to={'/'}>Home</Link>
            <h2>Author:{filteredArticles.author}</h2>
            <h3>Title:{filteredArticles.title}</h3>
            <img alt="" src="" />
            
            <p>Description:{filteredArticles.description}</p>
            <button onClick>Save</button>
        </div>
    )
}

export default Display;