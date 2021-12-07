import React from "react"
import { Link } from "react-router-dom"
import Favorites from "./Favorites"

function Landing(props) {

    const articleList = props.articles.map((article, i) => {
        return (
                    <li key={i}>
                    <div>
                    <Link
                    to={`/article/${i}`}
                    
                    onClick={props.articleClick}
                >
                        <p id={i}>{article.title}</p>
                        </Link>
                    </div>
                    <div>
                        <button onClick={() => props.addFavorite(article)} id={i}>Add Favorite</button>
                    </div>
                    </li>
                
            
        )
    })
    
    return (
        <div>
            <h1>Landing Page</h1>
            <div>
                <label htmlFor='article-search'></label>
                <input
                    type="text"
                    id='article-search'
                    value={props.search}
                    onChange={props.handleChange}
                />
                <button type='button' onClick={props.searchClick}>Search</button>
            </div>
            <div>
                <Favorites />
            </div>
            <ul id='articleList'>
            {articleList}
            </ul>
        </div>
    )
}

export default Landing;