import React from 'react'

function Display(props) {
    return(
        <div>
            <h1>{props.article.title}</h1>
            <h3>By {props.article.author}</h3>
            <p>{props.article.publishedAt}</p>
            <p>{props.article.description}</p>
            <p>Read full story: <a href={props.article.url}>{props.article.url}</a></p>
            <button onClick={() => props.addToArchive(props.article)}>Archive</button>
        </div>
    )
}

export default Display