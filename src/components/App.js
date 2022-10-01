import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

export default function App() {

  // search input
  const [search, setSearch] = useState('')
  // api data
  const [data, setData] = useState()
  // favorited articles
  const [faves, setFaves] = useState([])

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-09-01&sortBy=publishedAt&apiKey=22c7e6648f81407b881453d91c44ec70'
      fetch(url)
        .then(response => response.json())
        .then(jsonData => {

        })
  })  


  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display/:id" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}
