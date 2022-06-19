import React, { useEffect, useState } from "react"
import { Article } from "../Article"

function TopStories() {
  const [articles, setArticles] = useState([])
  const fetchHeadlines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    console.log("URL>>>", url)
    const response = await fetch(url)
    const data = await response.json()
    setArticles(data.articles)
  }

  const articleComponents = articles.map((article) => (
    <Article article={article} key={`article-${article.publishedAt}`} />
  ))

  useEffect(() => fetchHeadlines(), [])

  return (
    <div className="p-5">
      <h1 className="font-bold text-4xl mb-9">Top Stories</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {articleComponents}
      </div>
    </div>
  )
}

export default TopStories
