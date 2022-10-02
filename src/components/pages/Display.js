import { useParams } from 'react-router-dom'
import SearchBar from '../partials/SearchBar'

function Display(props) {
    let { id } = useParams()
    const article = props.articles[id]

    return (
        <div>
            <h1>News</h1>
            <SearchBar search={props.search} handleChange={props.handleChange} setArticles={props.setArticles}/>
            <ul>
            <h3>{article.title}</h3>
            <p>Source: {article.source.name} Date: {article.publishedAt}</p>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <p>{article.content}</p>
            <a target='_blank' rel="noreferrer" href={article.url}>Click for Full Article</a>
            </ul>
           </div>

    )
}

export default Display;