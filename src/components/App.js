import { Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
import Favorites from './pages/Favorites';


export default function App() {
  // state setting for articles
  const [articles, setArticles] = useState([])

 useEffect(() => {
  
   axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_X_API_KEY}`)
   .then((response) => {
     console.log(response.data)
     setArticles(response.data.articles)
   })
 }, [])

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
          exact path="/" 
          element={<Landing articles={articles}/>} 
          />
          <Route 
          exact path="/articles/:idx" 
          element={<Display articles={articles}/>} 
          />
          <Route 
          path="/favorites" 
          element={<Favorites articles={articles} />} 
          />
        </Routes>
      </main>
    </div>
  );
}

