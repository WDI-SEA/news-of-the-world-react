function SearchInput(props) {
    return (
        <div>
            <label htmlFor="search-input">Search:</label>
            <input id="search-input" type="text" placeholder="Search..." value={props.input}
                onChange={e => props.getSearchResults(e)} 
            />
        </div>
    );
}

export default SearchInput;
