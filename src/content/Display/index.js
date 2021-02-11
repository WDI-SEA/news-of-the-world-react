import React from 'react';
import {Link } from 'react'

export const Display = props => {
    let articles;
    // console.log(props.articles)
    if(props.articles.length <1){
        return <h1>Loading!</h1>
    } else {
        articles = props.articles.map((article, i) =>{
            return (
            <div key={`article-${i}`} className="display-article">
            <img src={article.urlToImage} alt="" />
            <h4>{article.title}</h4>
            <p>{article.author}</p>
            </div>
            )
        })
    }
    return (
        <div className="display">
        <h1>Results</h1>
            {articles}
        </div>
    )
};