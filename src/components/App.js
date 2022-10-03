import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Favorites from './pages/Favorites';


function App() {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [type, setType] = useState('Base')
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    handleRequests(type)
    
  }, [search])

  const handleClick = (e) => {
    setSearch(e)
  }

  const handleSetFavorite = (e) => {
    setFavorite([...favorite, e])
  }

  

  const handleRemoveFavorite = (e) => {
    // favorite.title.forEach((favorite, i) => {
    //   if(favorite === e) {
    //     favorite.splice(i,1)
    //   }
    // })
    setFavorite([])
  }

  const handleRequests = async (type) => {
    let url = ''
    if (type === 'Base') {
      url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      setType('Search')

    } else if (type === 'Search') {
      url = `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`

    }
    await axios.get(url)
      .then(response => {
        setArticles(response.data.articles)
        
      })
      .catch(console.warn)
  }

  return (
    <div className="App">
      <main>
        <nav>
          <Link to={'/'}>HOME</Link>{'    |     '}
          <Link to={'/favorites'}>FAVORITES</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Landing articles={articles} handleClick={handleClick}/>} />
          <Route path="/display/:id" element={<Display articles={articles} handleSetFavorite={handleSetFavorite} />} />
          <Route path='/favorites' element={<Favorites favorites={favorite} handleRemoveFavorite={handleRemoveFavorite}  />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
