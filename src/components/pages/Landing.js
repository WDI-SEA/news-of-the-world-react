import React from "react";
import { Link } from "react-router-dom";

function Landing({ newsInfo, search, setSearch, handleSubmit, handleFaves, faves }) {
    const allArticles = newsInfo.map((article, index) => {
        return (
            <li key={`articlekey-${index}`}>
                <h2><Link to ={`/display/${index}`}>{article.title}</Link></h2>
                <img src={article.urlToImage} width="300" alt="article related pic"></img> 
                {/* <div>
                    <button
                        id="submit"
                        type="button"
                        onClick={handleFaves(article)}
                    >
                    FAVORITE
                    </button>
                </div> */}
            </li>
        )
    })

    const allFaves = faves.map((fave, index) => {
        return (
            <h2><Link to ={`/display/${index}`}>{fave.title}</Link></h2>
        )
    })

    return (
        <>
            <h1>Landing Page</h1>
            <form>
                <h2>Search For An Article</h2>
                <label htmlFor="searchbox"/>
                <input 
                    id="search" 
                    type="text" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                ></input>
                <button
                    id="submit"
                    type="button"
                    onClick={handleSubmit}
                >
                SEARCH
                </button>
            </form>
            <h2>Favorited Articles</h2>
            {allFaves}
            <h2>All Articles</h2>
            {allArticles}
        </>
    )
}

export default Landing;