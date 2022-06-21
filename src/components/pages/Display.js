import React from "react";
import {Link} from  'react-router-dom'
import {useParams} from 'react-router'


function Display(props) {
let params = useParams();
let content = props.articles ? props.articles[params.id] : 'Oops Something went wrong!';
    return (
       <div>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            <div>
                <img className='newsImage' src={content.urlToImage} alt={content.title} />
            </div>
            <a href={content.url}>More to Read...</a>
            <hr />
            <div>
                <Link to="/">Home</Link>
            </div>
       </div>
    )
}

export default Display;