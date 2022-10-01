import { Link } from "react-router-dom";

function ArticleTitleCard(props) {
    return (
        <div>
            <Link to={`/articles/${props.index}`}>
                <h2>{props.article.title}</h2>
            </Link>
        </div>  
    );
}

export default ArticleTitleCard;
