import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'
import data from "../data/sample.js"

import Display from './pages/Display'
import Landing from './pages/Landing'

export default function App() {
  //data
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY
  const popularSearches = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  const sampleTopData = data

  //state vars
  // const [searchTerms, setSearchTerms] = useState('')
  // const [url, setUrl] = useState('no url set yet')


  // const firstUrl = `https://newsapi.org/v2/everything?country=us&apiKey=${apiKey}`
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))


  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Landing 
              popularSearches={popularSearches}
              />} 
          />
          <Route 
            path="/display" 
            element={<Display />} 
          />
          {/* maybe? */}
          <Route 
            path="/top/:category" 
            element={<Display 
              articlesResults={sampleTopData}
            />} 
          />
        </Routes>
      </main>
    </div>
  )
}
