import React from "react";
import {useParams} from 'react-router-dom'

function Display(props) {
    const { id } = useParams()
    // const foundArticle = props.articles.find(article => article.source.id === id)
    const articleDetails = props.articles[id]
    console.log(articleDetails)
    
    

    // const {articleDetails} = useParams()  

    // const articleDetails = articles.find(article => article.id.toString() === articleDetails)
    
    return (
        <>
        <h1>Current Article</h1>
        <h2>{articleDetails.title}</h2>
        <h3>{articleDetails.author}</h3>
        <a href={`${articleDetails.url}`}>  <img src={articleDetails.urlToImage} width= '600px'/> </a>
        <p>{articleDetails.description}</p>
        <button value={JSON.stringify(articleDetails)} 
        onClick={props.handleFavorite}>Add to favorites</button>
        </>
    )
}

export default Display;