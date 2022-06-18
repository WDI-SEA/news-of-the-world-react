import { Link } from 'react-router-dom'

export default function Landing(props) {
    // console.log(props.articles)
    // let articles = props.search ? props.searchedArticles : props.articles
    const articles = props.articles.map((article, i) => {
        return(
            <li style={{listStyle: 'none'}} key={`article-${i}`}>
                <Link to={`/article/${i}`}>{article.title}</Link>
            </li>
        )
    })
    // console.log(articles)
  return (
    <div>
        <form>
            <input
              id="article-search"
              type="text"
              value={props.search}
              onChange={props.handleChange}
            />
            <button type='submit'>Search</button>
        </form>
        <ul>
            {articles}
        </ul>
    </div>
  )
}
