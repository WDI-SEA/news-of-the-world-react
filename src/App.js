import React, { useEffect, useState } from 'react'
import Landing from './components/Landing'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './partials/Header'
import Archive from './components/Archive'

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
}, [])

  // console.log(articles[0].author)
  // const articleId = articles[0].source.id

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" render={() => <Landing articles={articles} />} />
        <Route path="/archive" component={Archive} />
      </div>
    </Router>
  )
}

export default App