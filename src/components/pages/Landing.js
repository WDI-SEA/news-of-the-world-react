import React from "react";

function Landing(props) {
    const popularArticles = props.articles.map((article, id)=> {
        return(
            <div key={`article${id}`}>
                <img src={article.urlToImage} width='300px'></img>
                <h1>{article.title}</h1>
                <p>Written by: {article.author} {article.publishedAt}</p>
            </div>
        )
    })
    return (
        <div>
        {popularArticles}
        </div>
    )
}

export default Landing;