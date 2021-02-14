import React from 'react';

export const Display = props => {
    let listArticles = props.articles.map( (article, i) => (
        <div style={{width: '70vw'}}>

            <h2>{article.title}</h2>
            <img src={article.urlToImage} style={{width: '70vw'}} />
            <h4>{article.author ? `Written by ${article.author}` : ""}</h4>
            <div>
                Published: {article.publishedAt}
            </div>
            <hr style={{marginTop: '25px'}}></hr>
        </div>
    ))
    let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

    return (
        <div className="display">
            <h1>News Results</h1>
            <hr />
            <div>{listArticles}</div>
        </div>
    )
};