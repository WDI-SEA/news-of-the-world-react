import { Link } from 'react-router-dom';
import Search from '../partials/Search'

function Landing(props) {

    function articlesToDisplay (filter) {
        if (filter === 'faves') {
            return(
                props.faves.map((article, idx) => {
                    return (
                        <ul key={`article-${idx}`}>
                            <h3><Link to={`/articles/${idx}`}>{article.title}</Link></h3>
                            <p>{article.content}</p>
                        </ul>
                    )
                })
            )

        } else {
            return(
                props.articles.map((article, idx) => {
                   return (
                   <ul key={`article-${idx}`}>
                       <h3><Link to={`/articles/${idx}`}>{article.title}</Link></h3>
                       <p>{article.content}</p>
                   </ul>
                   )
               })
            )
        }
    }


    return (
        <div>
            <h1>News</h1>
            <Search search={props.search} handleChange={props.handleChange} setArticles={props.setArticles}/>
            <span>
            <button onClick={() => props.setFilter('faves')}>View Saved Articles</button>
            <button onClick={() => props.setFilter('')}>View All Articles</button>
            </span>
            {articlesToDisplay(props.filter)}
        </div>

    )
}

export default Landing;