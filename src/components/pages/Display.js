import React from "react";
import { Link } from "react-router-dom"

function Display(props) {

    const results = props.articles.map((article, index) => {
        return (
            <div key={`article-link=${index}`} id="articleContainer">
                <Link to={`/display/${index}`}><h4>{article.title}</h4></Link>
                <h5>{article.author}</h5>
            </div>
        )
    })
    return (
        <>
            <h1>Articles From Around The World </h1>
            <div id="backButton">
                <Link to="/">Back</Link>
            </div>

            <form className="searchContainer" onSubmit={props.handleSubmit}>
                <input type="text" name="search" id="searchBar" placeholder='SEARCH' onChange={props.handleChange} value={props.search} />
            </form>

            {results}
        </>
        
    )
}

export default Display;