import React, { useEffect, useState } from "react"
import Articles from "../Articles"

function TopStories() {
  const [articles, setArticles] = useState([])
  const fetchHeadlines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    setArticles(data.articles)
  }

  useEffect(() => fetchHeadlines(), [])

  return (
    <div className="p-5">
      <h1 className="font-bold text-4xl mb-9">Top Stories</h1>
      <Articles articles={articles} />
    </div>
  )
}

export default TopStories
