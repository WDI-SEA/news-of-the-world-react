import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Article from './pages/Article';

import axios from 'axios'
import { useEffect, useState } from 'react';


export default function App() {

  
  let [articles, setArticles]  = useState([])

  const api_key = process.env.REACT_APP_NEWS_API_KEY
  // console.log(api_key)

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`

  useEffect(() => {
    console.log('useEffect is firing!')
    axios.get(url)
      .then(response => {
        console.log(response.data)
        console.log(response.data.articles)
        setArticles(response.data.articles)
      })
      .catch(console.warn)
  }, []) // empty dependency array (will make the useEffect run only on the first render!)

  console.log(articles)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display articles={articles}/>} />
          <Route path='display/:id' element={<Article />} />
        </Routes>
      </main>
    </div>
  );
}


