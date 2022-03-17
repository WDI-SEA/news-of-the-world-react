import React from "react";
import { Link } from "react-router-dom";

function Landing({ newsInfo, search, handleChange, handleSubmit }) {
    const allArticles = newsInfo.map((article, index) => {
        return (
            <li key={`articlekey-${index}`}>
                {/* <Link to ={`/display`}>{article.title}</Link> */}
                <h2>{article.title}</h2>
                <h3>{article.author}</h3>
                {/* <p>{article.content}</p>
                <p>{article.description}</p> */}
            </li>
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
                    onChange={handleChange}
                />
                <button
                    id="submit"
                    type="button"
                    onClick={handleSubmit}
                >
                SEARCH
                </button>
            </form>
            {allArticles}
        </>
    )
}

export default Landing;