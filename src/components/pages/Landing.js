import { Link } from "react-router-dom";

function Landing(props) {
    const articleComponents = props.articles.map((article, index) => {
        return (
            <div key={`article-${index}`}>
                <Link to={`/articles/${index}`}>
                    <h2>{article.title}</h2>
                </Link>
            </div>
        );
    });
    return (
        <div>
            <h1>Landing Page</h1>
            {articleComponents}
        </div>
    );
}

export default Landing;