import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';

function Display(props){
    let params = useParams();
    let content = props.articles ? props.articles[params.id] : 'Error wth happen';
    return (
        
        <div>
            <Link to="/">Home</Link>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            <a href={content.url}>Full article</a>
            <div >
                <img src={content.urlToImage} alt={content.title} />
            </div>
        </div>
    )
}

export default Display