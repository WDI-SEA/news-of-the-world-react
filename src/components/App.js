import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './Header';
import Favorites from './pages/Favorites';
import NEWS from '../NEWS.js';
const api_key = NEWS.API_KEY

export default function App() {
  const [article, setArticle] = useState([])
  const [faves, setfaves] = useState([])
  const handleFaveArticle = (article) => {
    if (!faves.includes(article)) {
      setfaves([...faves, article])
    }
  }
  const handleRemoveFaveArticle = (article) => {
    let favorites = [...faves]
    const artIndex = favorites.indexOf(article)
    favorites.splice(artIndex, 1)
    setfaves(favorites)
  }
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setArticle(jsonData.articles)
        console.log(jsonData.articles)
      })
  }, [url])
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing 
            articles={article} 
            handleFavArticle={handleFaveArticle} 
            />} />
            <Route path="/display/:id" element={<Display articles={article} />} />
            <Route path='/favorites' element={<Favorites 
            faves={faves} 
            handleRemove={handleRemoveFaveArticle} 
            />} />
          </Routes>
        </main>
      </div >
    </>
  )
}
