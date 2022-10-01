import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

import axios from 'axios'
import { useEffect } from 'react';


export default function App() {

  const api_key = process.env.REACT_APP_NEWS_API_KEY
  // console.log(api_key)

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`

  useEffect(() => {
    console.log('useEffect is firing!')
    axios.get(url)
      .then(response => {
        console.log(response.data)
      })
      .catch(console.warn)
  })

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


