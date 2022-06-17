import React from "react";
import { Link } from 'react-router-dom'

export default function Landing(props) {
    const articleLinks = props.articles.map((article, idx) => {
        return <>
            <h3 key={article.title}>
                <Link to={`/display/${idx}`}>{article.title}</Link>
            </h3>
        </>
    })
    return (
        <>
            {articleLinks}
        </>
    )
}