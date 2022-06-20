import { Routes, Route } from 'react-router-dom';
import '../App.css';
import axios from 'axios'


import Display from './pages/Display';
import Landing from './pages/Landing';
import { useEffect } from 'react';

function App() {

  // axios
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const response = await axios.get(url)
        console.log(response)
      }catch(err){
        console.warn('API ERROR', err)
      }
    }
    fetchData()
  },[]) //make sure this useEffect only runs the first time

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
