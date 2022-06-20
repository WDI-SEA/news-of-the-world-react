import React from 'react'
import { useParams } from 'react-router-dom'

function Display({ news, searchedNews }) {
  const { id } = useParams()

  let {
    author,
    description,
    source: { name: newspaper },
    title,
    url,
    urlToImage,
  } = news ? news[id] : 'Something Went Wrong!'

  const topNews = (
    <div>
      <h1>{news[id].title}</h1>
      <h2>By: {author}</h2>
      <h4>Source: {newspaper}</h4>
      <a href={url} rel='noopener noreferrer' target='_blank'>
        <img src={urlToImage} alt={title} />
      </a>
      <p>{description}</p>
    </div>
  )

  const searchedArticles = (
    <div>
      <h1>{searchedNews[id].title}</h1>
      <h2>By: {searchedNews[id].author}</h2>
      <h4>Source: {searchedNews[id].newspaper}</h4>
      <a href={searchedNews[id].url} rel='noopener noreferrer' target='_blank'>
        <img src={searchedNews[id].urlToImage} alt={searchedNews[id].title} />
      </a>
      <p>{searchedNews[id].description}</p>
    </div>
  )

  return (
    <React.Fragment>
      {searchedNews.length > 0 ? searchedArticles : topNews}
    </React.Fragment>
  )
}

export default Display
