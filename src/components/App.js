// import { Routes, Route, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import '../App.css';

// import Display from './pages/Display';
// import Landing from './pages/Landing';
// require('dotenv').config()

// function App() {
//   let [articles, setArticles] = useState([])

//   useEffect(() => {
//     fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-12-06&sortBy=publishedAt&apiKey=083f12958d6347baaf387c910a295831")
//     // fetch(`https://newsapi.org/v2/everything?q=${toApi}&from=2021-12-06&sortBy=publishedAt&apiKey=083f12958d6347baaf387c910a295831`)
//       .then(response => response.json())
//       .then(rdata => {
//         console.log("metal!!!!!", rdata.articles)
//         setArticles(rdata.articles)
//       })
//   }, [])

//   const Params = () => {
//     let { id } = useParams();
//     return (
//       <div style={{ fontSize: "50px" }}>
//         Now showing post {id}
//       </div>
//     )
//   }

//   return (
//     <div className="App">
//       <main>
//         <Routes>
//           <Route path="/" element={<Landing articles={articles} />} />
//           <Route path="/articles/:id" element={<Display articles={articles} />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Display from './pages/Display';
import Landing from './pages/Landing';

import '../App.css';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works

function App() {
  let [data, setData] = useState({ articles: [] })
  let [search, setSearch] = useState("")
  let [faves, setFaves] = useState([])


  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-12-06&sortBy=publishedAt&apiKey=083f12958d6347baaf387c910a295831")
      .then(response => response.json())
      .then(rdata => {
        rdata = Object.values(rdata)
        setData({ articles: rdata[2] })
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

  const addToFave = (article) => {
    if (faves.indexOf(article) === -1)
      setFaves([...faves, article])
  }

  return (
    // // Router for setting routes
    // <BrowserRouter>
    <div className="app">
      <h1>Recent News</h1>
      <main>
        <Routes>
          <Route path="/" element={<Landing articles={getFilteredArticles()} search={search} handleChange={handleChange} faves={faves} />} />
          <Route path="/display/:id" element={<Display articles={data.articles} add={addToFave} />} />
        </Routes>
      </main>
    </div>
    // </BrowserRouter>
  )
}

export default App


