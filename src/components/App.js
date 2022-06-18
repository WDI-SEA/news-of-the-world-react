import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';

import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';

const apiKey = process.env.REACT_APP_API_KEY

export default function App() {
  const [articles, setArticles] = useState([])
  const articleUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

  useEffect(() => {
    const displayAllArticles = async () => {
      try {
        const results = await axios.get(articleUrl)
        // console.log('this is results',results)
        const articles = results.data.articles
        // console.log('this is articles',articles)
        setArticles(articles)
      } catch (error) {
        console.log(error)
      }

    }
    displayAllArticles()
  }, [articleUrl])
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing  articles={articles}/>} />
          <Route path="/article/:id" element={<Display articles={articles}/>} />
        </Routes>
      </main>
    </div>
  );
}

