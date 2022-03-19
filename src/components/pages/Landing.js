import React from "react";

function Landing({topNewsList}) {
    const newsList = topNewsList.map((news, i) => {
        return (
            <div topNewsList-key={i}>
                <img src={news.urlToImage} alt="" />
                <h1>{news.title}</h1>
                 {news.author === null ? <h3>No Author</h3> : <h3>Written By: {news.author}</h3>}
                <div>
                    <p>{news.description}</p>
                </div>
            </div>
        )
    })
    return (
        <>
            <h1>Top News</h1>
            {newsList}
        </>
    )
}

export default Landing;