import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'


import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {

const [search, setSearch] = useState('')

useEffect (() => {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY
  const url = `https://newsapi.org/v2/everything?q=null&apiKey=${API_KEY}`
  async function searchNews() {
    try {
      const response = await axios.get(url)

    } catch (err) {
      console.warn(err)
    }
  }
    searchNews()
}, [])


function handleChange (e) {
  setSearch(e.target.value)
}
  

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Landing />}
            setSearch={setSearch}
            handleChange={handleChange}
           />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
