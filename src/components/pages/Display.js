import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
// use params b/c its using an array. drill down for info

export default function Display(props) {
    const params = useParams()
    // use ternery
    const content = props.articles ? props.articles[params.id] : 'Somethings off API or props aint working'
    
    return (
        <div>
            <h1>Display Page</h1>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            
            <div className="imageContainer">
                <img className="image" src={content.urlToImage} alt={content.title} />
            </div>
            
            <a href={content.url}>See Full Article</a>

            <div>
                <Link to='/'>Home</Link>
            </div>

        </div>

    )
}