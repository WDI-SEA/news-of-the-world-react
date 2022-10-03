import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

// Pages
import Display from './pages/Display';
import Landing from './pages/Landing';

// Partials
import Header from './partials/Header'
// require('dotenv').config()

export default function App() {
  // States
  const [search, setSearch] = useState('churro')
  const [articles, setArticles] = useState([])
  const [faves, setFaves] = useState([])

  // Hooks
  useEffect(() => {
    updateSearch()
  }, [])

  const updateSearch = async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-09-02&sortBy=publishedAt&apiKey=${process.env.REACT_APP_ENV_API_KEY}`
      
      const response = await axios.get(url)
      const articles = response.data.articles

      setArticles(articles)

    } catch(err) {
      console.log(err)
    }
  }

  const addFave = (article) => {
    console.log('added favorite')

    setFaves([...faves, article])
  }

  const dropFave = (article) => {
    setFaves([faves.splice(article, 1)])
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // Output
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
          <Landing 
            input={search}
            isFave={false}
            handleChange={handleChange}
            updateSearch={updateSearch}
            articles={articles}
            addFave={addFave}
          />} 
        />

        <Route 
          path="/articles/:id"
          element={
          <Display 
            articles={articles}
            addFave={addFave}
          />}
        />

        <Route 
          path='/favorites'
          element={
          <Landing 
            articles={faves}
            isFave={true}
            dropFave={dropFave}
          />}
        />
      </Routes>
    </BrowserRouter>
  )
}