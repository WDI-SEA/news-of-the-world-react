import { Routes, Route, Link } from 'react-router-dom';
import {useEffect, useState} from "react"
import '../App.css';
import { Container } from '@mui/material';
import Display from './pages/Display';
import Landing from './pages/Landing';
import axios from 'axios';
import Favorites from './pages/Favorites';

function App() {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState("Today's News")
  const [faveArticles, setFaveArticles] = useState([])

  const myApiKey = process.env.REACT_APP_API_KEY
  const newsUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${myApiKey}`


  useEffect(() => {
    (async() => {
      const newsData = await axios.get(newsUrl)
      setArticles(newsData.data.articles)
    })()
  },[newsUrl])

  const addToFavorites = (article) => {
    setFaveArticles([...faveArticles, article])
  }

  console.log(faveArticles)
  return (
    <Container maxWidth="sm">
      <div className="App App-header">
        <main>
          <Routes>
            <Route path="/" element={<Landing articles={articles} search={search} setSearch={setSearch}/>} />
            <Route path="/article/:idx" element={<Display articles={articles} addToFavorites={addToFavorites}/>} />
            <Route path="/favorites" element={<Favorites faveArticles={faveArticles} />}/>
          </Routes>
        </main>
      </div>
    </Container>
  );
}

export default App;
