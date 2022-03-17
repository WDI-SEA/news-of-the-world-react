export default function SearchButton ({handleSearchClick, searchTerm}) {
    return(
        <button 
            onClick={()=>handleSearchClick(searchTerm)}
        >
            {searchTerm}
        </button>
    )
}