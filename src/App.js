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
  const [archive, setArchive] = useState([])

  useEffect(() => {
    fetch(url+API_KEY)
    .then(res => res.json())
    .then(resData => {
        setArticles(resData.articles)
    })
  }, [])

  const addToArchive = (article) => {
    setArchive([...archive, article])
  }

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" render={() => <Landing articles={articles} addToArchive={addToArchive} />} />
        <Route path="/archive" render={() => <Archive archive={archive} /> } />
        {/* <Route path="/archive" component={Archive} /> */}
      </div>
    </Router>
  )
}

export default App