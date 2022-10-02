import { useParams, Link } from 'react-router-dom'

export default function Article(props) {
    let { id } = useParams()
    console.log(id)
    const article = props.articles[id]
    return (
        <div>
            Article!
            <h2>{article.title}</h2>
            <div>
                <img src={article.urlToImage} alt={article.title} />
            </div>
            {/* <p>{article.content}</p> */}
            <p>{article.description}</p>
            <p>{article.author ? article.author : null}</p>

        </div>
    )
}