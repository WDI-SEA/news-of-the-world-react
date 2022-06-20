import React from "react";

function Display(props) {
    return (
        <>
            <h1>{props.headlines.title}</h1>
            <h3>Author: {props.headlines.author}</h3>
            <p>{props.headlines.content}</p>
        </>
        
    )
}

export default Display;