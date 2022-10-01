import React from "react";

function Display(props) {

    const articleComponents = props.articles.map((article, i) => {
        return (
            <li key={`article-${i}`}>
                {article.title}
            </li>
        )
    })

    return (
        <div>
            <h1>Display Page</h1>
            <ol>{articleComponents}</ol>
        </div>
    )
}

export default Display;