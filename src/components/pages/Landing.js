import React from "react";
import {Link} from "react-router-dom"

function Landing({articles, handleChange, search, faves}) {
    
    const showArticles = articles.map((article,i)=>{
        return (
            <div>
                <Link to={`/articles/${i}`}>{article.title}</Link>
            </div>
        )
    })

    const showFavorites = faves.map((fave, i) => {
        return(
            <div>
                <Link to={`/favorites/${i}`}>{fave.title}</Link>
            </div>
        )
    })

    return (
        <>
        {faves.length === 0 ? "" :
        <h1>Favorites:</h1>
        }
        {showFavorites}
        <h1>Today's Headliners</h1>

        <input
          id="news-search"
          type="text"
          value={search}
          onChange={handleChange}

        />
        
        {showArticles}
        </>
    )
}

export default Landing;