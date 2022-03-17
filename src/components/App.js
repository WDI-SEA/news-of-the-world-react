import { Routes, Route, Link } from 'react-router-dom';
import {useEffect, useState} from "react"
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import axios from 'axios';

function App() {

  const [articles, setArticles] = useState([])

  const myApiKey = process.env.REACT_APP_API_KEY
  const newsUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${myApiKey}`

  // useEffect(() => {
  //   axios.get(newsUrl)
  //     .then(newsData => setArticles(newsData))
  // })

  useEffect(() => {
    (async() => {
      const newsData = await axios.get(newsUrl)
      setArticles(newsData.data.articles)
    })()
  },[newsUrl])

  console.log(articles)
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles}/>} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
