import { Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../App.css';
import axios from 'axios';

import Display from './pages/Display';
import Landing from './pages/Landing';



function App() {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])
  
  // // fetching data from API
  // const getNews = () => {
  //   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  //   .then(fetchObj => fetchObj.json())
  //   .then(newsData => {
  //     console.log(newsData)
  //     const newsArr = Object.values(newsData)
  //     console.log(newsArr[2])
  //     setNews(newsArr[2])
  //   })
  //   .catch(error=>console.log('error fetching data'))
  // }
  // useEffect(getNews, [])


  // const getNews = () => {
  //   axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  //   .then((response) => {
  //     console.log(response)
  //     const myNews = response.data
  //     setNews(myNews)
  //   })
  // }

  // useEffect(getNews, [])


  // // another way using axios async/await-- works
  // useEffect(() => {
  //   const getNews= async() => {
  //     try{
  //       const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  //       console.log(response.data.articles)
  //       const myNews = response.data.articles
  //       setNews(myNews)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getNews()
  // }, [])


  // // axios.then-- works
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(response => {
        console.log(response.data.articles, 'is this thing working')
        setArticles(response.data.articles)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  // this didn't work when i tried to do https://newsapi.org/v2/everything?q={search}

  // const getArticles = (e) => {
  //   let searchTerm = search.toLowerCase()
  //   return data.articles.filter(article => {
  //     let lowerCaseSearch = article.author
  //   })
  // }

  // const getFilteredArticles = () => {
  //   let searchTerm = search.toLowerCase()
  //   return articles.articles.filter((article) => {
  //     let lowerCaseSearch = article.title.toLowerCase()
  //     return lowerCaseSearch.includes(searchTerm)
  //   })
  // }

  const addToFaves = (article) => {
    if (!faves.includes(article)) {setFaves([...faves, article])
    }
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <Landing 
                articles={articles} 
                faves={faves}
                // articles={getFilteredArticles()}
                search={search}
                setSearch={setSearch}
                // handleChange={handleChange}
              />} 
          />
          <Route 
            path="/articles/:id" 
            element={<Display articles={articles} addToFaves={addToFaves}/>} 
           />
        </Routes>
      </main>
    </div>
  );
}

export default App;
