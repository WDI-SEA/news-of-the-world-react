import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing(props) {
    let [search, setSearch] = useState('')
    const favArticles = props.favs.map((fav, idx) => {
        return <>
            <h3 key={fav.title}>
                <Link to={`/display/${idx}`}>{fav.title}</Link>
                <button
                    onClick={() => props.handleRemove(fav)}
                >
                    Remove
                </button>
            </h3>
        </>
    })
    const articleLinks = props.articles.filter(a => a.title.toLowerCase().includes(search)).map((article, idx) => {
        return <>
            <h3 key={article.title}>
                <Link to={`/display/${idx}`}>{article.title}</Link>
                <button
                    onClick={() => props.handleFavArticle(article)}
                >
                    Favorite
                </button>
            </h3>
        </>
    })
    return (
        <>
            <div>
                <label htmlFor="article-search">Search the News:</label>
                <input
                    id="article-search"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <h2>Favorites:</h2>
            {favArticles}
            <h2>Popular:</h2>
            {articleLinks}
        </>
    )
}