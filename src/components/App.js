import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  const key = process.env.REACT_APP_API_KEY

  const [newsArticle, setNewsArticle] = useState([])
  const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])


  const handleSubmit = e => {
    e.preventDefault()
    const url = `https://newsapi.org/v2/everything?q=${search}&apikey=${key}`
    axios.get(url)
      .then(dataResponse => setNewsArticle(dataResponse.data.articles))
  }

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
    axios.get(url)
      .then(dataResponse => setNewsArticle(dataResponse.data.articles))
  }, [newsArticle])

  const handleClick = (article) => {
    if (!faves.includes(article))
      setFaves([...faves, article])
    console.log('fave', faves)
  }
  const removeFave = (article) => {
    const removed = faves.filter(favedArticle => {
      if (favedArticle.title !== article.title)
        return favedArticle
    })
    setFaves({ ...faves, removed })
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
                handleSubmit={handleSubmit}
                setSearch={setSearch}
                search={search}
              />} />
          <Route
            path="/articles/:id"
            element={
              <Display
                articles={newsArticle}
                handleClick={handleClick}
                removeFave={removeFave}
                faves={faves}
              />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
