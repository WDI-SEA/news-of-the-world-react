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
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(url+API_KEY)
    .then(res => res.json())
    .then(resData => {
        setArticles(resData.articles)
    })
  }, [])

  const addToArchive = (article) => {
    if(!archive.includes(article)) {
      setArchive([...archive, article])
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const dynamicSearch = () => {
    return articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <Router>
      <div>
        <Header /><br></br>
        <div>
          <input type="text" placeholder="search for an article" value={search} onChange={handleChange} />
        </div>
        <Route exact path="/" render={() => <Landing articles={dynamicSearch()} addToArchive={addToArchive} />} />
        <Route path="/archive" render={() => <Archive archive={archive} /> } />
      </div>
    </Router>
  )
}

export default App