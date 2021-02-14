import React from 'react';

export const Display = props => {
    let listArticles = props.articles.map( (article, i) => (
        <div style={{width: '70vw'}}>
            <hr style={{marginTop: '25px'}}></hr>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} style={{width: '70vw'}} />
            <h4>{article.author ? `Written by ${article.author}` : ""}</h4>
            <div>
                Published: {article.publishedAt}
            </div>
        </div>
    ))
    let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

    return (
        <div>
            <h1>News Results</h1>
            <div>{listArticles}</div>
        </div>
    )
};