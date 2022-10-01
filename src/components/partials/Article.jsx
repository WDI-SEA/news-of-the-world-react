import { Link } from 'react-router-dom'

export default function Article(props) {
    return (
        <li>
            <Link to={`/articles/${props.idx}`}>
                <h3>{props.article.title}</h3>
            </Link>

            <p>From: {props.article.source.name}</p>
            <p>Published on: {props.article.publishedAt}</p>

            {props.saveArticle ? <button onClick={() => props.saveArticle(props.article)}>Save Article</button> : ''}
        </li>
    )
}