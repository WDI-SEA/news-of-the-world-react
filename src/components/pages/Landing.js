import SearchInput from "../partials/SearchInput";
import ArticleTitleCard from "../partials/ArticleTitleCard";

function Landing(props) {
    let articleComponents = [];
    if (props.articles && props.articles.length > 0) {
        articleComponents = props.articles.map((article, index) => {
            return (
                <ArticleTitleCard 
                    article={article}
                    key={`article-${index}`}
                />
            );
        });
    }
    else {
        articleComponents = <h2>No results</h2>;
    }
    return (
        <div className="mt-3 flex flex-col items-center">
            <h1 className="text-3xl">News of the World</h1>
            <SearchInput input={props.input} getSearchResults={props.getSearchResults} />
            {articleComponents}
        </div>
    );
}

export default Landing;