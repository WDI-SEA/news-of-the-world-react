import React from 'react';


export const Display = props => {
    let articles;
    //console.log(props.articles)
    if (!props.articles) {
        return <h6>Psssst. Do a thing first. 👆👆👆👆👆👆</h6>
    } else {
        articles = props.articles.map((article, i) => {
            return (
                <div className="display-article" key={`article-${i}`} >
                        <img src={article.urlToImage} alt="Article" />
                        <h4>{article.title}</h4>
                        <p>{article.author}</p>
                        <input type="submit" onClick={props.saveToFavorites} value="Save to favorites!" name={article.url}/>
                </div>
            )
        })
    }
    return (
        <div>
            <h1>Results</h1>
            <div className="display">
                {articles}
            </div>
        </div>
    )
}

