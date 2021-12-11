import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import '../App.css';
import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from './partials/Header';

function App() {

  let [data,setData] = useState({articles: []})
  let [search,setSearch] = useState('')
  let [current,setCurrent] = useState({})

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=bd7fdb517bd14de5b4122e8290f44011`)
    .then(response => response.json())
    .then(rdata=> {
      setData({articles:rdata.articles})
    console.log(data)
  })
    },[])
  
  const handleChange = (e) => {
    console.log(e.target);
    setSearch(e.target.value)
  }

  const getFilteredArticles = () => {
    return data.articles.filter(article => {
      console.log(article);
      return article.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  const changeCurrent  = article => {
    setCurrent(article)
  }

//   const article = data.articles.map(article => {
//     return <Display 
//     article ={article}
//      key={article._id}
//      changeCurrent={changeCurrent}
//      />

// })

  return (
    <div className="App">
      
      <main>
        <Header/> 
        <Routes>
          <Route path="/" element={
            <Landing 
              articles={getFilteredArticles()}
              search={search}
              handleChange={handleChange}
             />}
           />
          <Route path="/display/:id" element={<Display 
              articles={data.articles}
            />} 
          />
          <Route path="fave" element = {<Fave />}
          />

        </Routes>
      </main>
    </div>
  );
}

export default App
