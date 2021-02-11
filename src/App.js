import React, { useEffect, useState } from 'react'
import Landing from './components/Landing'

function App() {

  const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey='
  const API_KEY = process.env.REACT_APP_API_KEY
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(url+API_KEY)
    .then(res => res.json())
    .then(resData => {
        // console.log(resData.articles[0].author)
        setArticles(resData.articles)
    })
}, [API_KEY])

  // console.log(articles[0].author)
  // const articleId = articles[0].source.id

  return (
    <div>
      <Landing articles={articles}/>
    </div>
  )
}

export default App