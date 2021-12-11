import React from "react";
import { Link } from 'react-router-dom'

function Fave(props) {
    const allFaves = props.faves.map((a, i) => {
        return (
            <li key={i}>
                <h2><Link to={`/display/${i}`}>{a.title}</Link></h2>
                <small>Written by: {a.author}</small>
               
               
            </li>
        )
    })
    return(
        <div>
        <h1>{allFaves}</h1>
        </div>
    )
}

export default Fave