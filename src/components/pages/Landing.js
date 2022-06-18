import { Link } from 'react-router-dom'

export default function Landing(props) {
    // console.log(props.articles)
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
        <ul>
            {articles}
        </ul>
    </div>
  )
}
