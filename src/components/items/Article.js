import { Link, useParams } from 'react-router-dom'

export default function Article(props) {
    let { id } = useParams()
    console.log()
    return (
        <div>
            <Link
                to={`/articles/${props.id}`}
                key={`articleId-${props.id}`}
            >
            <h3>{props.article.title} </h3>
            </Link>
            <h5>{props.article.author}</h5>
            <p>{props.article.description}</p>

        </div>

    )
}