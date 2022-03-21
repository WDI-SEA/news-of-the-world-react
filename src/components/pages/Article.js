import { Link, useParams } from "react-router-dom"

export default function Article(props) {
    let params = useParams()
    let article = props.articles ? props.articles[params.id] : "Something Went Wrong 😭"
    return (
        <>
            <h1>{article.title}</h1>

            <h5><a href={article.url}>{article.content}</a></h5>

            <div>
                <img src={article.urlToImage} alt="Pic for Article" />
            </div>

            <div>
                <Link to="/display">Back</Link>
            </div>
        </>
    )
}