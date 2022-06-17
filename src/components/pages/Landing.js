import React from "react";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing(props) {
    let [search, setSearch] = useState('')
    const articleLinks = props.articles.map((article, idx) => {
        return <>
            <h3 key={article.title}>
                <Link to={`/display/${idx}`}>{article.title}</Link>
            </h3>
        </>
    })
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div>
                <label htmlFor="article-search">Search the News:</label>
                <input
                    id="article-search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            {articleLinks}
        </>
    )
}