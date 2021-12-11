import React from "react";
import { Link } from 'react-router-dom'


function Landing(props) {
    const allArticles = props.articles.map ((article, i) => {

        return (
        <li key = {i}>
            <Link to ={ `/display/${i}`}><p>{article.title}</p></Link>
        
        
        </li>
        )
    })
    return (
        <section>
        <label htmlfor = "article-search">Search an article</label>
        <input onChange={props.handleChange} type= "text"/>
        
        <h3>{allArticles}</h3>
        </section>
    )
}

export default Landing;