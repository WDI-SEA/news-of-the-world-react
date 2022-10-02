import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'


import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
      const API_KEY = process.env.REACT_APP_NEWS_API_KEY
      const url = `https://newsapi.org/v2/everything?q=null&apiKey=${API_KEY}`
      async function fetchNews() {
          try {
              const response = await axios.get(url)
              const articles = await response.data.articles
              setArticles(articles)

          } catch (err) {
              console.warn(err)
          }
      }
      fetchNews()
  },[])


  function handleChange (e) {
    setSearch(e.target.value)
  }


  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing search={search} setSearch={setSearch} articles={articles} setArticles={setArticles} handleChange={handleChange} />} />
          <Route path="/articles/:id" element={<Display search={search} setSearch={setSearch} articles={articles} setArticles={setArticles} handleChange={handleChange}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
