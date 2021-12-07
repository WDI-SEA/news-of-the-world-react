import React from "react";

function Display(props) {
    // console.log('Were on Display')
    return (
        <div>
            <button onClick={props.addToFaves(props.story)}>Add to Favorites</button>
            <h1>{props.story.title}</h1>
            <h4>By: {props.story.author}</h4>
            <p>{props.story.content}</p>
            <hr/>
            <p>Source: {props.story.source.name}</p>
            <p>Published: {props.story.publishedAt}</p>
        </div>
    )
}

export default Display;