import SearchInput from "../partials/SearchInput";
import FilterButtons from "../partials/FilterButtons";
import ArticleList from "../partials/ArticleList";

function Landing(props) {
    return (
        <div className="mt-3 flex flex-col items-center">
            <h1 className="text-3xl">News of the World</h1>
            <SearchInput input={props.input} getSearchResults={props.getSearchResults} />
            <FilterButtons handleFilterClick={props.handleFilterClick} />
            <ArticleList articles={props.articles} />
        </div>
    );
}

export default Landing;