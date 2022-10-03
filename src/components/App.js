import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';
import Search from './pages/Search'
function App() {
  const [articles, setArticles] = useState([])
  const [input, setInput] = useState("")
  const [search, setSearch] = useState([])
  const [fave, setFave] = useState([])
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const addFave = (article) => {
    setFave([...fave, article])
  }
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'from=2022-10-01&' +
    'sortBy=popularity&' +
    `apiKey=${process.env.REACT_APP_TMDB_API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setArticles(data.articles)})
  }, [])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?' +
    `q=${input}&` +
    'from=2022-10-01&' +
    'sortBy=popularity&' +
    `apiKey=${process.env.REACT_APP_TMDB_API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      setSearch(data.articles)})
  }, [input])
  return (
    <div className="App">
      <main>
        <Header handleChange={handleChange}/>
        <Routes>
          <Route path="/" element={<Landing articles={articles} fave={fave}/>} />
          <Route path="/articles/:id" element={<Display articles={articles} addFave={addFave}/>} />
          <Route path="/faves/:id" element={<Display articles={fave}/>} />
          <Route path="/search" element={<Search articles={search} fave={fave}/>} />
          <Route path="/search/:id" element={<Display articles={articles} addFave={addFave}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
