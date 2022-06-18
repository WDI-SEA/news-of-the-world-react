import { Routes, Route } from 'react-router-dom';
import '../App.css';

import {  useEffect } from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';
import axios from 'axios'
function App() {
   // state setting for articles
  //  const [articles, setArticles] = useState([])
  
  console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
    
    (async () => {
      try {
        const worldNews = `https://newsapi.org/v2/everything?q=apple&from=2022-06-17&to=2022-06-17&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
        const res = await axios.get(worldNews)
        console.log(res.data)
        // setArticles(res.data.articles)
      } catch (err) {
        console.warn(err)
      }
    })()
  
  }, [])
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
