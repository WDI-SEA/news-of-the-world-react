import { Link } from 'react-router-dom'

export default function Article(props) {
    const date = new Date(props.article.publishedAt)
    const published = date.toDateString()

    return (
        <li>
            <Link to={`/articles/${props.saved ? 'saved/' : ''}${props.idx}`}>
                <h3>{props.article.title}</h3>
            </Link>

            <p>From: {props.article.source.name}</p>
            <p>Published on: {published}</p>

            {props.saveArticle ? <button onClick={() => props.saveArticle(props.article)}>Save Article</button> : ''}
        </li>
    )
}