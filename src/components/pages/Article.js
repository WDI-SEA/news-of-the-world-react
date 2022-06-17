export default function Article (props) {
    const article =props.article
    return (
        <div className="article-container">
            <h2>{article.title}</h2>
            <h4>{article.author}</h4>
            <img src={article.urlToImage}></img>
        </div>
    )
}