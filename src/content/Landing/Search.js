//search function to allow you to see the top articles within the US or by queryterm

export const Search = (props) => {
    return (
        <div>
            <input type="submit" value="Give me top headlines in the United States" onClick={props.searchUsArticle} />
            <form>
                <input type="text" placeholder="Search" name="search" onChange={props.setSearchTerm}/>
                <input type="submit" value="Submit" onClick={props.searchQuery} id={props.query}/>
            </form>
        </div>
    )
}