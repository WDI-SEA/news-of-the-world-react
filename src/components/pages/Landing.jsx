import React from "react";
import { Link } from 'react-router-dom'

function Landing({articles, favorites, addToFavorites, searchInput, setSearchInput, searchNews}) {
    const articleList = articles.map((article,idx) => {
        return (
            <li key={`article-${idx}`}>
                <Link to={`/articles/${idx+1}`}>{article.title}</Link>
                <button style={{display: 'block'}}onClick={()=>addToFavorites(article)}>+Fave</button>
            </li>
        )
    })
    const faveList = favorites.map((article, idx) => {
        return (
            <li key={`article-${idx}`}>
                <Link to={`/articles/${idx+1}`}>{article.title}</Link>
                {/* <button onClick={()=>addToFavorites(article)}>+Fave</button> */}
            </li>
        )
    })
    return (
        <div className="landing">
            {/* <h1>Landing Page</h1> */}
            <form onSubmit={searchNews}>
                <label htmlFor="searchInput">Search the News:</label>
                <input onChange={e=>setSearchInput(e.target.value)} type="text" name="searchInput" id="searchInput" value={searchInput} autoComplete="off" />
                <button type="submit">Search</button>
            </form>
            <div className="row">
                <div className="col">
                    <h3>Top Results</h3>
                    <ul>
                        {articleList}
                    </ul>
                </div>
                <div className="col">
                    <h3>Favorite Articles</h3>
                    <ul>
                        {faveList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing;