import {Link, useParams} from 'react-router-dom'


export default function ArticleDetails (props) {
    const { id } = useParams()
    const articleIndex = Number(id)
    const article = props.articles[articleIndex] ? props.articles[articleIndex] : 'NOTHING HERE'
    console.log(article)

   

    return (
        <div className="article-details-container">
            <h2>{article.title}</h2>
            <h4>{article.author}</h4>
            <p>{article.description}</p>
            <a href={article.url}>Article Link</a><br></br>
            <img className="article-image" src={article.urlToImage}></img><br></br>
            <button onClick={() => props.handleSaveArticle(article)  }>Save this article </button>
            <Link to='/'>Back to Search</Link>
        </div>
    )
}