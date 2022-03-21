import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../App.css'
import data from "../data/sample.js"

import Display from './pages/Display'
import Landing from './pages/Landing'
import axios from 'axios'

export default function App() {
  //data
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY
  const popularSearches = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  const sampleTopData = data

  //state vars
  const [searchTerms, setSearchTerms] = useState('')
  const [url, setUrl] = useState('no url set yet')
  const [dataResults, setDataResults] = useState()

 //change url after a search term has been set
  useEffect(()=>{
    setUrl(`https://newsapi.org/v2/top-headlines?country=us&${searchTerms}&apiKey=${apiKey}`)
  },[searchTerms])

  //ping api after url has been set
  useEffect(()=>{
    axios.get(url)
      .then(res=>{
        console.log(res.data)
        setDataResults(res.data.articles)
      })
  },[url])


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
              // articlesResults={sampleTopData}
              articlesResults={dataResults}
              popularUrl={url}
            />} 
          />
        </Routes>
      </main>
    </div>
  )
}
