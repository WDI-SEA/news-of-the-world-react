import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [articles, setArticles] = useState([])
  const [faves, setFaves] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
        const response = await axios.get(url)
        const articles = response.data.articles
        setArticles(articles)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const addToFaves = (article) => {
    setFaves([...faves, article])
  }
  console.log(faves)

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={articles} addFaves={addToFaves} faves={faves} />} />
          <Route path="/display/:id" element={<Display articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
