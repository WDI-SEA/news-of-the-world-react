import { React } from "react";
import { Link } from 'react-router-dom';

function Landing(props) {
    const popularArticles = props.articles.map((article, id)=> {
        return(
            <div key={`article${id}`}>
                <img src={article.urlToImage} width='300px' ></img>
                
                <h3><Link to={`/article/${id}`}>{article.title}</Link></h3>
                <p>Written by: {article.author} {article.publishedAt}</p>
                <button onClick={()=>props.handleClick(article)} >Save Article</button>
            </div>
        )
    })
    return (
        <div>
        {popularArticles}
        </div>
    )
}

export default Landing;