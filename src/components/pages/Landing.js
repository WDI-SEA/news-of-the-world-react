import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const allArticles = props.articles.map((a, i) => {
        return (
            <li key={i}>
                <h2><Link to={`/display/${i}`}>{a.title}</Link></h2>
                <small>Written by: {a.author}</small>
                <img src={a.urlToimage} alt={a.title} />
                <button value={`${a}`} onClick={() => props.handleClick(a)}>Add to favorites</button>
            </li>
        )
    })
    return (
        <div>
            <h1><Link to='/favorites'>Favorites</Link></h1>
            <label htmlFor="article-search"></label>
            <input type="text"
                id="article-search"
                value={props.search}
                onChange={props.handleChange}
            />
            <ul>{allArticles}</ul>
        </div>
    )
}

export default Landing;