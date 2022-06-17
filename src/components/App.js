import { Routes, Route } from 'react-router-dom';
import {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [articles, setArticles] = useState([])
  const [Fave, setFaves] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    (async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
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
          <Route path="/" element={<Landing articles={articles} />} />
          <Route path="/display/:id" element={<Display articles={articles} />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
