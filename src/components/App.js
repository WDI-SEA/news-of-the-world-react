import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    (async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-06-17&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const response = await axios.get(url)
        setArticles(response.data.articles)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  

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
