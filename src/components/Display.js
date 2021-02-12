import React from 'react'

function Display(props) {

    function changeText() {
        document.getElementById('archiveButton').innerText="Archived!"
    }

    return(
        <div>
            <h1>{props.article.title}</h1>
            <h3>By {props.article.author}</h3>
            <p>{props.article.publishedAt}</p>
            <h4>{props.article.description}</h4>
            <p>Read full story: <a href={props.article.url} target="_blank">{props.article.url}</a></p>
            <button id="archiveButton" onClick={() => props.addToArchive(props.article)}>Archive</button>
        </div>
    )
}

export default Display