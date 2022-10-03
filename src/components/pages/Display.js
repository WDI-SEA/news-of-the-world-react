import React from "react";
import { useParams } from "react-router-dom";

function Display(props) {
    const {id}=useParams()
    const article = props.apiResponse[id]
    console.log(props.apiResponse)
    if (!article) {
        return <h1>oops something when wrong 😱</h1>
    }

    return (
        <>
            <h1>Display Page</h1>


            <h2>{article.title}</h2>
            
            <p>by: {article.author}</p>
            
            <img src={article.urlToImage} alt={article.title}/>
            
            <p>{article.content}</p>

            <a target='_blank' href={article.url} >see more details</a>
        </>
    )
}

export default Display;