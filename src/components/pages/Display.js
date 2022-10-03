import React from "react";
import { useParams, Link } from 'react-router-dom'
function Display(props) {
    let { id } = useParams()
    const singleArticle = props.articles[id]
    console.log(singleArticle)
    if(!singleArticle){
        return <h1>oops something went wrong!</h1>
    }
    return (
        <div>
        <h1>{singleArticle.title}</h1>
        <img src={singleArticle.urlToImage} width='500px'></img>
        <p>Written by: {singleArticle.author}, {singleArticle.publishedAt}</p>
        <p>{singleArticle.content}</p>
        <a target='_blank'href={singleArticle.url}>Link to article</a>
        </div>
    )
}

export default Display;