import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Landing({ news, searchedNews, getSearchedNews }) {
  const [search, setSearch] = useState('')
  const allNews = news.map((article, i) => {
    const { title } = article

    return (
      <div key={title}>
        <Link to={`/display/${i}`}>{title}</Link>
      </div>
    )
  })

  const allSearchedNews = searchedNews.map((article, i) => {
    const { title } = article
    return (
      <div key={title}>
        <Link to={`/display/${i}`}>{title}</Link>
      </div>
    )
  })

  const handleChange = e => {
    const value = e.target.value
    setSearch(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    getSearchedNews(search)
    setSearch('')
  }

  return (
    <React.Fragment>
      <h1>Top News</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search for news: </label>
        <input type='text' id='search' onChange={handleChange} />{' '}
        <button> Search</button>
      </form>
      {searchedNews.length > 0 ? allSearchedNews : allNews}
    </React.Fragment>
  )
}

export default Landing
