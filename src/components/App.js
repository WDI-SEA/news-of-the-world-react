import { Routes, Route } from 'react-router-dom'
import { useEffect, useState, useParams } from 'react'
import '../App.css'

import Display from './pages/Display'
import Landing from './pages/Landing'

export default function App() {
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY

  //state vars
  const [searchTerms, setSearchTerms] = useState('')
  const [url, setUrl] = useState('no url set yet')


  const firstUrl = `https://newsapi.org/v2/everything?country=us${searchTerms}&apiKey=${apiKey}`
  // console.log(url)
  const popularSearches = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  


  const handleSearchClick = (term) =>{
    console.log(`setting search terms to ${term.replace(" ","-")}`)
    console.log('maybe change me to a <Link> instead ?')
    setSearchTerms(`&q=${term.replace(" ","-")}`)
    // setUrl(`https://newsapi.org/v2/everything?country=us${searchTerms}&apiKey=${apiKey}`)
  }



  // const [newsData, setNewsData] = useState()
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
              handleSearchClick={handleSearchClick}
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
            element={<Display />} 
          />
        </Routes>
      </main>
    </div>
  )
}
