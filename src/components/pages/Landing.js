import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

export default function Landing ({ articles }) {

  const articlesList = articles.map((article, index) => {
    if (index > 0) {
      return (
        <>
          <div className='card-regular'>
            <div className='card-img-holder'>
              <img src={article.urlToImage} alt={article.description} />
            </div>
            <div className='card-head-content'  key={`articleKey${index}`}>
              <h5>{article.title}</h5>
              <p>
                <small>
                  {article.author} <br />Published : {' '}   
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
          <div className='card-head'>
            <h4>{article.title}</h4>
            <div className='card-img-holder' key={`articleKey${index}`}>
              <img src={article.urlToImage} alt={article.description} />
            </div>
            <div className='card-head-content'>
              <p>                
                  <small>
                    {article.author} Published : {' '}
                    {dayjs(article.publishedAt).format('MM/DD/YYYY')}
                  </small>
                
              </p>
              
                <small>{article.content}</small>
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
  return (
    <>
      <div className='main'>
        <div className='flex-container'>{articlesList}</div>
      </div>
    </>
  )
}
