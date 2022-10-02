import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SearchBar (props) {
    let navigate = useNavigate()

    async function searchNews(e) {
        e.preventDefault()
         try {
            const API_KEY = process.env.REACT_APP_NEWS_API_KEY
            const url = `https://newsapi.org/v2/everything?q=${props.search}&apiKey=${API_KEY}`
            const response = await axios.get(url)
            const articles = await response.data.articles
            props.setArticles(articles)
            navigate('/', {replace: true})
      
      
        }catch(err) {
            console.warn(err)
        }
    }
    return (
        <div>
            <form>
            <label htmlFor='search'>Search Recent News:</label>
            <input
                id='search'
                type='text'
                placeholder='search news...'
                value={props.search}
                onChange={props.handleChange}
            />
            <button type='submit' onClick={searchNews}>Go</button>
            </form>

        </div>
    )
}