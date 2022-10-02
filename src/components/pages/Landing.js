import { Link } from 'react-router-dom';
import SearchBar from '../partials/SearchBar'

function Landing(props) {

     const articlesArr = props.articles.map((article, idx) => {
        return (
        <ul key={`article-${idx}`}>
            <h3><Link to={`/articles/${idx}`}>{article.title}</Link></h3>
            <p>{article.content}</p>
        </ul>
        )
    })


    return (
        <div>
            <h1>News</h1>
            <SearchBar search={props.search} handleChange={props.handleChange} setArticles={props.setArticles}/>
            {articlesArr}
        </div>

    )
}

export default Landing;