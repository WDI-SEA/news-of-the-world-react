// import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import '../App.css';
// import Display from './pages/Display';
// import Landing from './pages/Landing';
// require('dotenv').config()

// function App() {

//   const [data, setData] = useState({articles: []})
//   const [search, setSearch] = useState('')

//   const handleChange = (e) => {
//     setSearch(e)
//   }
//   const getFilteredArticles = () => {
//     let searchTerm = search.toLowerCase()
//     return data.articles.filter((a) => {
//       let lowerCaseNames = a.title.toLowerCase()
//       return lowerCaseNames.includes(searchTerm)
//   })
//   // setData({villagers: filteredVillagers})
//   }

//   useEffect(() => {
//     fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=633b695013de4d3ca6f72b140cd3f12f`)
//     .then(res => res.json())
//     .then(rdata => {
//       rdata = Object.values(rdata)
//       setData({articles: rdata[2]})
//       console.log(rdata)
//       console.log(data)
      
//     })
//     }, [])
  
//   return (
//     <div className="App">
//       <main>
//         <Routes>
//           <Route path="/" element={<Landing articles={getFilteredArticles()} change={handleChange} />} />
//           <Route path="/display" element={<Display articles={data.articles}/>} />
//         </Routes>
//       </main>
//     </div>
//   );
//   }

// export default App;


// require('dotenv').config()
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react'
import Display from './pages/Display';
import Landing from './pages/Landing';
import Favorites from './pages/Favorites';

function App() {
  const [data, setData] = useState({articles:[]})
  const [search, setSearch] = useState('')
  const [favs, setFavs] = useState([])
  // const [index, setIndex] = useState(null)

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=810f69c7510d43d992c3a39514284231`)
    .then(res => res.json())
    .then(rdata => {
      rdata = Object.values(rdata)
      setData({articles: rdata[2]})
      console.log('this is rdata\n', rdata)
    })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    let searchTerm = search.toLowerCase()
    return data.articles.filter(a => {
      let lowerCaseArticle = a.title.toLowerCase()
      return lowerCaseArticle.includes(searchTerm)
    })
  }
  const handleClick = (article) => {
    if (favs.indexOf(article)=== -1) {
    setFavs([...favs, article])
    console.log('dick', favs)
    }
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={getFilteredArticles()} search={search} handleChange={handleChange} handleClick={handleClick}/>} />
          <Route path="/display/:id" element={<Display articles={data.articles}/>} />
          <Route path="/favorites" element={<Favorites favs={favs}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;