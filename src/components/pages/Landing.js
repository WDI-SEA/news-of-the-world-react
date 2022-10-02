
import { useState, useEffect } from 'react'
import axios from 'axios'

function Landing() {
    const [search, setSearch] = useState('')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY
        const url = `https://newsapi.org/v2/everything?q=null&apiKey=${API_KEY}`
        async function fetchNews() {
            try {
                const response = await axios.get(url)
                const articles = await response.data.articles
                setArticles(articles)

            } catch (err) {
                console.warn(err)
            }
        }
        fetchNews()
    },[])

    const searchNews = async (e) => {
        e.preventDefault()
    
        try {
            const API_KEY = process.env.REACT_APP_NEWS_API_KEY
            const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
            const response = await axios.get(url)
            const articles = await response.data.articles
            setArticles(articles)

        }catch(err) {
            console.warn(err)
        }
    }

    const articlesArr = articles.map((article, idx) => {
        return (
        <ul key={`article-${idx}`}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </ul>
        )
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
       }

    return (
        <div>
            <h1>News</h1>
            <form>
            <label htmlFor='search'>Search Recent News:</label>
            <input
                id='search'
                type='text'
                placeholder='search news...'
                value={search}
                onChange={handleChange}
            />
            <button type='submit' onClick={searchNews}>Go</button>
            </form>

            {articlesArr}
        </div>

    )
}

export default Landing;