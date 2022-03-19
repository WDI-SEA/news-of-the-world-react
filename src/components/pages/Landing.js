import React from "react";

function Landing({topNewsList}) {
    const newsList = topNewsList.map((news, i) => {
        return (
            <div>
                <img src={news.urlToImage} alt="" />
                <h1>{news.title}</h1>
                <div>
                    <h5>{news.description}</h5>
                </div>
                 {news.author === null || news.author === ""  ? <h3>No Author</h3> : <p>Written By: {news.author}</p> }
                <div>
                   <p>Click here for <a href={news.url} target="_blank">more</a> information about the article</p> 
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