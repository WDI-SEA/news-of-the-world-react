import { Routes, Route } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';

import Header from './partials/Header'

const apiKey = process.env.REACT_APP_NEWS_API_KEY

export default function App() {
  const [article, setArticles] = useState([])
  const [favs, setFavs] = useState([])
  const handleFavArticle = (article) => {
    if (!favs.includes(article)) {
      setFavs([...favs, article])
    }
  }
  const handleRemoveFavArticle = (article) => {
    let favorites = [...favs]
    const artIndex = favorites.indexOf(article)
    favorites.splice(artIndex, 1)
    setFavs(favorites)
  }
  const articleUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  useEffect(() => {
    fetch(articleUrl)
      .then(response => response.json())
      .then(jsonData => {
        setArticles(jsonData.articles)
      })
  }, [])
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing articles={article} handleFavArticle={handleFavArticle} handleRemove={handleRemoveFavArticle} favs={favs} />} />
            <Route path="/display/:id" element={<Display articles={article} />} />
          </Routes>
        </main>
      </div >
    </>
  )
}