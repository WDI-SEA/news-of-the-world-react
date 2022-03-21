import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

export default function Landing ({ articles,search, setSearch }) {
  const articlesList = articles.map((article, index) => {
    if (index > 0) {
      return (
        <>
          <div className='card-regular' key={`articleKey${index}`}>
            <div className='card-img-holder'>
              <img src='{article.urlToImage' alt={article.description} />
            </div>
            <div className='card-head-content'>
              <h3>{article.title}</h3>
              <p>
                <small>
                  by {article.author}. Published :{' '}
                  {dayjs(article.publishedAt).format('MM/DD/YYYY')}
                </small>
              </p>
              <p>
                <small>
                  <Link to={`/details/${index}`}>Read more...</Link>
                </small>
              </p>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className='card-head' key={`articleKey${index}`}>
            <div className='card-img-holder'>
              <img src='{article.urlToImage' alt={article.description} />
            </div>
            <div className='card-head-content'>
              <h3>{article.title}</h3>
              <p>
                <small>
                  by {article.author}. Published :{' '}
                  {dayjs(article.publishedAt).format('MM/DD/YYYY')}
                </small>
              </p>
              <p>
                <small>
                  <Link to={`/details/${index}`}>Read more...</Link>
                </small>
              </p>
            </div>
          </div>
        </>
      )
    }
  })
  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor='search'>Search : </label>
        <input
          type='text'
          value={search}
          id='search'
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
      </form>      
      <div className='flex-container'>
        <h3>News</h3>
      </div>
      <ul>{articlesList}</ul>
    </>
  )
}
