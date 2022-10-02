import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

export default function App() {

  // search input
  const [search, setSearch] = useState('')
  // api data
  const [toApi, setApi] = useState('business')
  // set data
  const [data, setData] = useState({targetSearch: []})
  // favorited articles
  const [faves, setFaves] = useState([])

  useEffect(() => {
    document.title = "News Search App"
    const url = `https://newsapi.org/v2/everything?q=${toApi}&from=2022-09-01&sortBy=publishedAt&apiKey=22c7e6648f81407b881453d91c44ec70`
      fetch(url)
        .then(response => response.json())
        .then(rData => {
            setData({targetSearch: rData.articles})
            console.log(rData)
        })
      }, [toApi])  

  const handleSubmit = (e) => {
    e.preventDefault()
    setApi(search)
  }
 

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <div>
            <h1>WorldMedia News</h1>
          </div>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/display/:id" element={<Display />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
