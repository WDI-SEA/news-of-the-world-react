import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from 'react'

import Display from './pages/Display';
import Landing from './pages/Landing';
import DisplayFav from './pages/DisplayFav';


function App() {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("")
  const [favorites, setFavorites] = useState([])

  useEffect(() =>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b07ba9ec80fe4533a5f50d04c79ecbbb')
    .then(response => response.json())
    .then(rdata=>{
      rdata = Object.values(rdata)
      setArticles(rdata[2])
    })
  }, [])


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getResults = (e) => {
    e.preventDefault()
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-12-06&sortBy=popularity&apiKey=b07ba9ec80fe4533a5f50d04c79ecbbb`)
    .then(response => response.json())
    .then(r2data=>{
      r2data = Object.values(r2data)
      setArticles(r2data[2])
    })
  }

  const addFavorite = (el) => {
    if(favorites.indexOf(el) === -1){
    setFavorites(prevFav => [...favorites, el])
    }
  }

  return (
    <div className="App">
      <main>
          <Routes>
            <Route path="/" element={<Landing onChange={handleChange}
                onSubmit={getResults}
                handleClick={addFavorite}
                favorites={favorites} 
                articles={articles}
                search = {search} />}
                />
            <Route path="/article/:id" element={<Display  articles={articles}/>} />
            <Route path="/favorites/:id" element={<DisplayFav  favorites={favorites}/>} />
          </Routes>
      </main>
      
    </div>
  );
}

export default App;
