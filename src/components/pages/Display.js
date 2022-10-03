import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// use params b/c its using an array. drill down for info

export default function Display(props) {
    const { id } = useParams()  
    const article = props.apiResonse[id] 
        console.log(article)

    return (
        <div>
            <h1>Display Page</h1>
            <h1>{article.title}</h1>
            <p>by {article.author}</p>
            <p>{article.content}</p>
            
            <div className="imageContainer">
                <img className="image" src={article.urlToImage} alt={article.title} />
            </div>
            
            <a href={article.url}>See Full Article</a>

            <div>
                <Link to='/'>Home</Link>
            </div>

        </div>

    )
}