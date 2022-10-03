import React from "react";
import { useParams } from "react-router-dom"
function Display(props) {
    let { id } = useParams();
    console.log(Number.parseInt(id))
    const article = props.articles[Number.parseInt(id)]
    return (
        <div>
            <h2><a href={article.url?article.url : ""}>{article.title}</a></h2>
            <h4>{article.author} <button onClick={() => {props.addFave(article)}}>Add To Favorite</button></h4> 
            <img src={article.urlToImage} width="500"/>
            <p>{article.content}</p>

        </div>
    )
}

export default Display;