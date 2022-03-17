import SearchButton from "./SearchButton"

export default function SearchBar ({handleSearchClick,popularSearches}) {
    //map out search buttons here
    const popularSearchButtons = popularSearches.map(searchTerm => {
        return(
            <SearchButton 
                handleSearchClick={handleSearchClick}
                searchTerm={searchTerm}
            />
        )
    })
    return(
        <>
        <div>
            <input type="text" placeholder="this is where search terms might be entered"></input>

        </div>
            {popularSearchButtons}
        </>
    )
}