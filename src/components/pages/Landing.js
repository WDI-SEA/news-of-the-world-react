import React from "react";
import { Link } from 'react-router-dom'

function Landing(props) {
    const allArticles = props.articles.map((a,i) => {
        return(
            <li>
                <Link to={`/display/${i}`}>{a.title}</Link>
            </li>
        )
    })

    const allFaves = props.fave.map((f,i) => {
        return(
            <li>
                <Link to={`/display/${i}`}>{f.title}</Link>
            </li>
        )
    })

    return (
        <div>
            <div>
            <h1>Landing Page</h1>
            <ul>{allArticles}</ul>
            </div>
            <div>
            <h1>Favorites</h1>
            <ul>{allFaves}</ul>
            </div>
        </div>
    )
}

export default Landing;