import React from "react";
import { useParams } from "react-router-dom";

function Display(props) {
    let newParam = useParams()
    let content = props.articles ? props.articles[newParam.id] : 'error'
        return (
            <li>
                <h2>{content.title}</h2>
                <small>Written by: {content.author}</small>
                <p>{content.description}</p>
                <img src={content.urlToimage} alt={content.title} />
            </li>
        )

}

export default Display;