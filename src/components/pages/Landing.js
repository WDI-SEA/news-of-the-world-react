import React, { useEffect } from 'react'
import axios from "axios";
import Article from "../partials/Article";

function Landing(props) {
    const setArticleList = props.setArticleList

    useEffect(() => {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY
        async function fetchArticles() {
          try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            setArticleList(response.data.articles)
          } catch (error) {
            console.warn(error)
          }
        }
        fetchArticles()
      }, [setArticleList])

    const displayArticles = props.articleList.map((article, i) => {
        return (
            <Article
                key={`article-${i}`}
                article={article}
                idx={i}
                saveArticle={props.saveArticle}
            />
        )
    })

    const displaySaved = props.savedArticleList.map((article, i) => {
        return (
            <Article
                key={`article-${i}`}
                article={article}
                idx={i}
                saved={true}
            />
        )
    })
    
    return (
        <div style={{display: 'flex'}}>
        <div>
            <h1>Top Headlines</h1>

            <ol>
                {displayArticles.length > 0 ? displayArticles : 'No articles to display'}
            </ol>
        </div>

        <div>
            <h1>Saved Articles</h1>

            <ol>
                {displaySaved.length > 0 ? displaySaved : "No saved articles"}
            </ol>
        </div>
        </div>
    )
}

export default Landing;