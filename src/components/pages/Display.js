import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';

function Display(props){
    let params = useParams();
    let content = props.articles ? props.articles[params.id] : 'Ruh-Roh! API or props fail!';
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            <div className="imageBox">
                <img className='artImage' src={content.urlToImage} alt={content.title} />
            </div>
            <a href={content.url}>Read More...</a>
            <hr />
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Display