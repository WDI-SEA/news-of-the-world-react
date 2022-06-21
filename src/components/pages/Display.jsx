import { useParams } from 'react-router-dom'


const ArticleDetails = (props) => {

    const { id } = useParams()
    const article = props.articles[id]

    return (
        <div>
            <img src={article.urlToImage} alt={article.description}/>

            <h1> {article.title}! </h1>
            <h2> {article.description} </h2>
            <h3> Author: {article.author} </h3>
            <p> {article.content} </p>
            <a href={article.url}><p> {article.source.name} </p></a>

            <button onClick={() => props.handleSaveArticle(article)}>Save to Favorites</button> {' || '}
            <button onClick={() => props.handleRemoveSavedArticle(article)}>Remove from Favorites</button>
        </div>
    )
}

export default ArticleDetails