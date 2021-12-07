import React from "react";
import { Link, Redirect } from 'react-router-dom'

function Landing(props) {

    const displayArticles = props.articles.map((el, index) => {
        return <Link to={`/article/${index}`}><li key={`article-${index}`} >{el.title}</li></Link>
    })

    return (
        <div>
            <h1>Landing Page</h1>
            {displayArticles}
        </div>
    )
}

export default Landing;