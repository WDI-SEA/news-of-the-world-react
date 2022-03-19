import SearchButton from "./SearchButton"

export default function SearchBar ({popularSearches,setSearchTerms}) {

    //map out search buttons here
    const popularSearchButtons = popularSearches.map(searchTerm => {
        return(
            <div
                onClick={()=>setSearchTerms(searchTerm)}
            >
                <SearchButton 
                    searchTerm={searchTerm}
                />
            </div>
        )
    })
    
    return(
        <>
            <div>
                <h1>enter a search here</h1>
                <input type="text" placeholder="this is where search terms might be entered"></input>

            </div>
            <div>
                <h3>or get top news for:</h3>
                {popularSearchButtons}
            </div>
        </>
    )
}