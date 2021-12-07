import { useLocation, Link } from 'react-router-dom'


function Display() {
    const location = useLocation()
    const article  = location.state
    return (
        <div className="article-container">
            <div>
                <Link to='/'>Homepage</Link>
            </div>

            
            <h1>{article.title}</h1>
            <small>Author: {article.author}</small><br/>
            <small>Published: {article.publishedAt}</small>
            <img src={article.urlToImage} alt="" />
            <p>{article.description}</p>
            <p>{article.content}</p>
            <a href={article.url} target="_blank"><h2>Read more...</h2></a>
        </div>       
    )
}

export default Display;