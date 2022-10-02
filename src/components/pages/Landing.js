import SearchInput from "../partials/SearchInput";
import FilterButtons from "../partials/FilterButtons";
import ArticleList from "../partials/ArticleList";

function Landing(props) {
    return (
        <div className="mt-3 flex flex-col items-center">
            <FilterButtons handleFilterClick={props.handleFilterClick} filter={props.filter} />
            <SearchInput input={props.input} getSearchResults={props.getSearchResults} filter={props.filter} />
            <ArticleList articles={props.articles} />
        </div>
    );
}

export default Landing;