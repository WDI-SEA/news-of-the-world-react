import { Link } from 'react-router-dom'

const Articles = (props) => {

    const articleList = props.articleNames ? props.articleNames.map((article, i) => {
        return (
            <li key={i}>
                <h3><Link to={`/display/${i}`}>{article.title}</Link></h3>
                <p>{article.author}</p>
                <button onClick={()=> props.handleClick(article)}>Add To Favorites</button>
            </li>
        )
    }) : []

    return (
        <div>
        <ul>
         {articleList}
        </ul>
        <div id="faves">
            <ul>
            {props.articleFaves}
            </ul>
        </div>
        </div>
    )
}

export default Articles
