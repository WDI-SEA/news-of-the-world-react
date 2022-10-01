import { Link } from "react-router-dom";
import SearchInput from "../partials/SearchInput";

function Landing(props) {
    let articleComponents = [];
    if (props.articles) {
        articleComponents = props.articles.map((article, index) => {
            return (
                <div key={`article-${index}`}>
                    <Link to={`/articles/${index}`}>
                        <h2>{article.title}</h2>
                    </Link>
                </div>
            );
        });
    }
    return (!props.articles ?
        <div>
            <h1>Landing Page</h1>
            <SearchInput input={props.input} getSearchResults={props.getSearchResults} />
            <h2>No results</h2>
        </div>
        :
        <div>
            <h1>Landing Page</h1>
            <SearchInput input={props.input} getSearchResults={props.getSearchResults} />
            {articleComponents}
        </div>
    );
}

export default Landing;