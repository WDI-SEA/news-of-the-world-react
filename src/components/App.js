import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
  const [searchTerms, setSearchTerms] = useState('')
  const [url, setUrl] = useState('no url set yet')

 //change url after a search term has been set
  useEffect(()=>{
    setUrl(`https://newsapi.org/v2/top-headlines?country=us&${searchTerms}&apiKey=0e36f9beb30c43169c99a9154667f49d`)
  },[searchTerms])


  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Landing 
              popularSearches={popularSearches}
              setSearchTerms={setSearchTerms}
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
              popularUrl={url}
            />} 
          />
        </Routes>
      </main>
    </div>
  )
}
