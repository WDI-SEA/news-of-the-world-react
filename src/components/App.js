import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  const key = process.env.REACT_APP_API_KEY
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  // const latestDate = new Date(year, month, day)
  const latestDate = new Date()

  const [newsArticle, setNewsArticle] = useState([])
  const [filteredArticle, setFilteredArticle] = useState([])
  const [search, setSearch] = useState('Top Headlines')
  // const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])


  //fetching data from api
  // const url = `https://newsapi.org/v2/everything?=${latestDate}&sortBy=popularity&apiKey=${myKey}`
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`
    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
    axios.get(url)
      .then(dataResponse => setNewsArticle(dataResponse.data.articles))
  }, [newsArticle])


  const handleClick = (article) => {
    if (!faves.includes(article))
      setFaves([...faves, article])
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
    getFilteredArticles()
  }

  const getFilteredArticles = () => {
    const filteredArticles = newsArticle.filter((article) => {
      return article.title.toLowerCase().includes(search.toLowerCase())
    })
    // return filteredArticles
    // setFilteredArticle(filteredArticles)
    setNewsArticle(filteredArticles)
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                articles={newsArticle}
                faves={faves}
                getFilteredArticles={getFilteredArticles}
                handleSearch={handleSearch}
                search={search}
              />} />
          <Route
            path="/articles/:id"
            element={
              <Display
                articles={newsArticle}
                handleClick={handleClick}
              />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
