import React from "react";
import { useState, useEffect } from 'react';
import Article from "../items/Article";

function Landing(props) {
    const [search, setSearch] = useState('')

    const allArticles = props.articles.map((article, i) => {
        
        return (
            <Article 
                key={`article-${i}`}
                article={article}
                id={i}
            />
        )
    })
    
    return (
        <div>
        <h1>Landing Page</h1>
        <label htmlFor='article-search' >Search for articles by topic:</label>
        <form id='search-form'>
            <input 
                id='article-search'
                type='text'
                placeholder='enter search term...'
                // value={props.value}
                // onChange=    
                // onSubmit={(e) => props.handleSearch(e)}
            />
            <button 
                type=""
                onSubmit={(e) => props.handleSearch(e)}
            >Search</button>

        </form>


        
        <h2>All Recent Articles</h2>
        {allArticles}
        </div>

    )
}

export default Landing;