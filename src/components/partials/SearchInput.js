function SearchInput(props) {
    return (
        <div className="mt-2 flex gap-1">
            <label htmlFor="search-input">Search:</label>
            <input id="search-input" type="text" placeholder="Search News API..." value={props.input}
                onChange={e => props.getSearchResults(e)} 
                className="px-1 border rounded"
            />
        </div>
    );
}

export default SearchInput;
