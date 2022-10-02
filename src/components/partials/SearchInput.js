function SearchInput(props) {
    return (props.filter === "all" ?
        <div className="mt-2 flex gap-1 w-6/12">
            <label htmlFor="search-input">Search:</label>
            <input id="search-input" type="search" placeholder="Search News API..." value={props.input}
                onChange={e => props.getSearchResults(e.target.value)} 
                className="px-1 border rounded w-full"
            />
        </div>
        :
        <div className="mt-2 w-6/12"></div>
    );
}

export default SearchInput;
