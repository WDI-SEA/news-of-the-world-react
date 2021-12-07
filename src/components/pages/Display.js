import React from "react";

function Display(props) {
    const ca = props.currentArticle
    return (
        <>
        <h1>Display Page</h1>
        <h2>{ca.title}</h2>
        <h4>By {ca.author} for {ca.source.name}</h4>
        <img src={ca.urlToImage} alt="articleImage"/>
        <p>{ca.description}</p>
        <a href={ca.url}>Read More...</a>
        </>
    )
}

export default Display;