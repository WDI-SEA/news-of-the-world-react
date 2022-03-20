import React from "react";
import {useParams, Link} from 'react-router-dom'



function Display({articles, addFave}) {
    const {id} = useParams()
        return (
            <div>
                <div>
                    <h1>{articles[id].title}</h1>
                    <h3>{articles[id].author}</h3>
                    <p>{articles[id].publishedAt}</p>
                    <p>{articles[id].content}</p>
                    <img src={articles[id].urlToImage} alt={articles[id].title}/>
                    <button onClick={()=>{addFave(articles[id])}}>Add to favorites</button>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        )
    }


export default Display