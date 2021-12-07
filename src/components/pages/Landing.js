import React from "react";
import { Link } from 'react-router-dom';

function Landing(props) {
    // Create array for articles to iterate through and send to UL
    // Attach index to a key and include in Link to click on
    // Articles is the variable that is set to getFilteredArticles pulled in from App.js
    const articleList = props.articles.map((article, i) => {
        return (
            <li key={i}>
                <h2><Link to = {`/display/${i}`}>{article.title}</Link></h2>
                <small>Author: {article.author}</small>
            </li>
        )
    })
    // Create array for Faves to iterate through.  Same as above
    const allFaves = props.faves.map((faves, i) => {
        return (
            <li key={i}>
                <h2><Link to = {`/display/${i}`}>{faves.title}</Link></h2>
            </li>
        )
    })
    // Send props to UL for articleList
    // Send favorites to UL for allFaves
    return (
        <div>
            <div>
                <label htmlFor='articleSearch'>Search: </label>
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
                <h1>Favorites: </h1>
                <ul>
                    {allFaves}
                </ul>
            </div>
        </div>
    )
}

export default Landing