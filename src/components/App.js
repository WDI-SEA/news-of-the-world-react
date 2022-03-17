import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {

  const myKey = process.env.REACT_APP_API_KEY
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  // const latestDate = new Date(year, month, day)
  const latestDate = new Date()
  // console.log(latestDate)

  const [newsArticle, setNewsArticle] = useState([])

  // const url = `https://newsapi.org/v2/everything?=${latestDate}&sortBy=popularity&apiKey=${myKey}`
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`
    axios.get(url)
      .then(dataResponse => setNewsArticle(dataResponse.data.articles))
    // fetch(url)
    //     .then(response => response.json())
    //     .then(jsonData => {
    //         setFilms(jsonData.results)
    //     })
  }, [])
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={newsArticle} />} />
          <Route path="/articles/:id" element={<Display articles={newsArticle} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
