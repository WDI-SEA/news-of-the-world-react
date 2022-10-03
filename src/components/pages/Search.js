import React from "react";
import { Link } from "react-router-dom"
function Landing(props) {
    const articlesArray = props.articles.map((article, i) => {
        return (
            <li key={`search-${i}`}>
                <Link to={`/search/${i}`}>{article.title}  {article.publishedAt}</Link>
            </li>
        )
    })
    const faveArray = props.fave.map((article, i) => {
        return (
            <li key={`fave-${i}`}>
                <Link to={`/faves/${i}`}>{article.title}  {article.publishedAt}</Link>
            </li>
        )
    })
    return (
        <div>
            <div>
                <h1>Search Results:</h1>
                <ol>{articlesArray}</ol>
            </div>
            <div>
                <h1>Favorite News</h1>
                <ol>{faveArray}</ol>
            </div>
        </div>
    )
}

export default Landing;