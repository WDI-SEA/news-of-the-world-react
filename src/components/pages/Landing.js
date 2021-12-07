import React from "react";
import { Link } from 'react-router-dom';

function Landing(props) {
    //test for props brought in from App parent
    //console.log('this is props:', props)
    //return list of articles
    const articleList = props.articles.map((article, i) => {
        return (
            //assign each article list item a key, i
            <li key={i}>
                {/* link up display route to show one article list item, i */}
                <h3><Link to = {`/display/${i}`}>{article.title}</Link></h3>
                {/* author */}
                <small>Written by: {article.author}</small>
            </li>
        )
    })
    //return list of favorited articles, similar to above
    const allFavorites = props.favorites.map((favorite, i) => {
        return (
            <li key={i}>
                {/* link straight to article url source */}
                <h3><a href={favorite.url}>{favorite.title}</a></h3>
            </li>
        )
    })
    return (
        //basic label and input box for user to type search terms
        //populated articles list
        //populated favorited articles list
        <div>
            <div>
                <label htmlFor='articleSearch'>Search for an article: </label>
                <input
                    id='articleSearch'
                    type='text'
                    value={props.search}
                    onChange={props.handleChange}
                />
            </div>
            <ul>
                {articleList}
            </ul>
            <div>
                <h1>Saved articles: </h1>
                <ul>
                    {allFavorites}
                </ul>
            </div>
        </div>
    )
}

export default Landing;