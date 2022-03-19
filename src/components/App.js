import { Routes, Route } from 'react-router-dom';
import '../App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Display from './pages/Display';
import Landing from './pages/Landing';


const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`




function App() {
  const [topNewsList, setTopNewsList] = useState([])

  useEffect(() => {
    axios.get(topNewsUrl)
      .then(response => {
        console.log(response.data.articles)
        setTopNewsList(response.data.articles)
      })
  }, [])

    
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing topNewsList={topNewsList}/>} />
          <Route path="/display" element={<Display topNewsList={topNewsList}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
