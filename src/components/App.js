import { Routes, Route } from 'react-router-dom';
import {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [articles, setArticles] = useState([])
  const [Faves, setFaves] = useState([])


// adding favorites 

const handleFavoriteArticle = (article) => {
  
  if (!Faves.includes(article)) {
    setFaves([...Faves, ...[article]])
  }
  // console.log('adding to favorites', article)
  setFaves([...Faves, article])
  // const article = JSON.parse(e.target.value)
}


// Deletion button

const handleRemoveFavArticle = (article) => {
  let favorites = [...Faves]
  const artIndex = favorites.indexOf(article)
  favorites.splice(artIndex, 1)
  setFaves(favorites)
}




  // const [search, setSearch] = useState('')
  useEffect(() => {
    (async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        // const url = `https://newsapi.org/v2/everything?country=us&apiKey=${apiKey}`
        const response = await axios.get(url)
        const articles = response.data.articles
        // console.log(articles)
        setArticles(articles)

      }catch(err) {
        console.warn('errorrrrr', err)
      }
    })()
  }, [])


  return (
    <div className="App">
      <main>
       
        <Routes>
          <Route path="/" element={<Landing articles={articles} delete={handleRemoveFavArticle} fav={handleFavoriteArticle} fave={Faves} />} />
          <Route path="/display/:id" element={<Display handleFavorite={handleFavoriteArticle} articles={articles}  />} />
          <Route path='/favorites/:id' element={<Display  fave={Faves} />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
