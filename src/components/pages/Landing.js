import React from "react";

function Landing( {articles} ) {
    const allArticles = articles.map((article, idx) => {
        return(
            <section key={idx}>
                <h4>{article.title}</h4>
                <small>by: {article.author}</small>
            </section>
        )
    })
    return (
        <>
            <h1>Landing Page</h1>
            <div>
                {allArticles}
            </div>
        </>
    )
}

export default Landing;