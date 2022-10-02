import React from "react";
import { Link } from 'react-router-dom'

export default function Landing(props) {

    const results = props.results.map((article, i) => {
        return(
            <div
                key={`article-${i}`}
                className="link"
            >
                <Link to={`/details/${i}`} className='articleLinks'>
                    <p>{article.title}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Landing Page</h1>
            {results}
        </div>
    )
}