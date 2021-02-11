import React from 'react'

function Display(props) {
    return(
        <div>
            <h1>{props.article.title}</h1>
            <h3>By {props.article.author}</h3>
            <p>{props.article.description}</p>
            <a href={props.article.url}>{props.article.url}</a>
        </div>
    )
}

export default Display