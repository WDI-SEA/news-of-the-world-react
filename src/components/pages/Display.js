import { useParams } from "react-router-dom";

function Display(props) {
    const {articleId} = useParams();
    const article = props.articles[articleId];
    return (
        <div>
            <h1>Display Page</h1>
            <h2>{article.title}</h2>
            <h3>Author: {article.author}</h3>
            <p>{article.description}</p>
        </div>
    )
}

export default Display;