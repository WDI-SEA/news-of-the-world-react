import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
require("dotenv").config();

function App() {
  let [news, setNews] = useState({articles: []})
  let [faves, setFaves] = useState([])
  let [search, setSearch] = useState('')

  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_NEWS_KEY}`

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then((newsData) => {
      newsData = Object.values(newsData)
      //console.log(newsData[2][0]);
      setNews({articles: newsData[2]})
    })
    .catch(err => console.error)
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    let searchTerm = search.toLowerCase()
    return news.articles.filter(art => {
      let lowerCaseArt = art.title.toLowerCase()
      return lowerCaseArt.includes(searchTerm)
    })
  }

  const handleClick = (article) => {
    if(faves.indexOf(article) === -1)
    setFaves([...faves, article])
  }


  return (
    <div className="App">
      <div className="App-header">
        <main>
          <Routes>
            <Route path="/" element={<Landing 
              articlesToDisplay = {getFilteredArticles()} 
              search={search}
              handleChange={handleChange}
              faves={faves}
            />} />
            <Route path="/display/:id" element={<Display articles={news.articles} handleClick={handleClick} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
