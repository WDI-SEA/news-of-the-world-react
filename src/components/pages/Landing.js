import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'


function Landing({ articles, faves, handleSubmit, search, setSearch }) {

    const allArticles = articles.map((article, idx) => {
        return (
            <>
                <li key={`article-${idx}`}><Link to={`/articles/${idx}`}>{article.title}</Link></li>
                <br />

            </>
        )
    })

    const savedArticles = faves.map((article, idx) => {
        return (
            <>
                <li key={`article-${idx}`}><Link to={`/faves/${idx}`}>{article.title}</Link></li>
                <br />

            </>
        )
    })
    return (
        <div>
            <div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <label htmlFor="query-search">Search: </label>
                    <input
                        id="query-search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type='submit' />
                </form>
            </div>
            <div className="faveNews">
                <h1>Saved Articles</h1>
                <hr />
                <ul>
                    {savedArticles}
                </ul>

            </div>

            <div className="newsToday">
                <h1>Top News For Today</h1>
                <h6>{Date()}</h6>
                <hr />
                <ul>
                    {allArticles}
                </ul>
            </div>
        </div>
    )
}

export default Landing;