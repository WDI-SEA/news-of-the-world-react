import React from "react";

function Display(props) {
    const articleDisplay = props.articles.map((article, i) => {
        return (
            <div key={`article${i}`}>
                <h3><a href={`${article.url}`}>{article.title}</a></h3>
                <p>{article.content}</p>
                <button onClick={() => props.handleClick(article)}>Save to Favorites!</button>
            </div>
            )
    })
    return (
        <div>
            <h1>Articles</h1>
            {articleDisplay}
        </div>
    )
}

export default Display;