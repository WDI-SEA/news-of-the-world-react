import React from "react";

function Landing(props) {
    const headlineArticles = props.headlines.map((headline, i) => {
        return(
            <div key={`headline-${i}`}>
                <a href={`${headline.url}`}>{headline.title}</a>
                <p>By: {headline.author}</p>
                <img src={`${headline.urlToImage}`} />
                <p>{headline.description}</p>
            </div>
        )
    })
    return (
        <div>
            {headlineArticles}
        </div>
    )
}

export default Landing;