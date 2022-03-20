import React from "react"
import { Link } from "react-router-dom"

function Landing({ articles, search, setSearch, faves }) {
  const showArticles = articles.map((article, id) => {
    return (
      <li key={`article-${id}`}>
        <Link to={`/articles/${id}`}> {article.title}</Link>
      </li>
    )
  })

  const showFaves = faves.map((fav, id) => {
    return (
        <li key={`fav-${id}`}>
        <Link to={`/articles/${id}`}> {fav.title}</Link>
      </li>
    )
  })

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div>
        <h1>News of the World</h1>
        
          <label htmlFor="article-search">Search:</label>
          <input type="text" id="article-search" value={search} onChange={handleSearch} />
        
      </div>
      <h3>Favorite Articles</h3>
      {showFaves}
      <h2> Articles</h2>
      {showArticles}
    </div>
  )
}

export default Landing
