export default function Search(props) {
    return (
        <form>
            <label htmlFor="search">Search the news:</label>
            <input
                id="search"
                type="text"
                name="search"
                value={props.searchValue}
                onChange={e => props.handleInputChange(e)}
            />

            <button
                type="submit"
                onClick={e => props.handleSearch(e)}
            >
                Search
            </button>
        </form>
    )
}