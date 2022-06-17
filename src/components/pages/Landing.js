import React from "react";
import Article from './Article'

function Landing(props) {
    const articles = props.articles.map((article, i) => {
        return <Article key={`article-${i}`} article ={article}/>
    })
    return (
        <div className="articles-container">
            <h1>Articles</h1>
            {articles}
        </div>
    )
}

export default Landing;